//import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';


import LineChart from '../../../LineChart/LineChart';
import TokenData from '../TokenData/TokenData';
import UsersList from './UsersList/UsersList';

export default function BrandPage() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //dispatch(getFollowers()); // would fetch followers of brands 
    // }, []);
    const users = useSelector(state => state.users.filter(user => !user.isBrand));
    //const loading = useSelector(state => state.users.isLoading); // used later to set spinner if brands haven't loaded yet
    const auth = useSelector(state => state.auth);
    const followers = users.filter(user => user.isFollowing
        .some(item => auth.brandData.symbol === item.symbol)
    );
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Tokens awarded',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1458, 2854, 789, 1256, 1500, 2524, 45],
        }]
    };

    const followersTokenAmount = followers.map(follower => {
        const tokenData = follower.isFollowing.find(token => token.symbol === auth.brandData.symbol);
        return tokenData.tokenOwned + tokenData.tokenOwned;
    }).reduce((a, b) => a + b, 0);

    return (
        <div className="row ms-0 ms-md-0 ms-lg-0 ms-xl-5 ms-xxl-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <UsersList auth={auth} followers={followers} />
                <div className="row mt-5 mb-4 m-auto justify-content-between">
                    <h6 className={`fw-8 ${css`font-size: 0.8rem`}`}>TOKEN OVERVIEW</h6>
                    <TokenData amount={auth.brandData.tokenMax} title='current balance' colorScheme='secondary' />
                    <TokenData amount={27400574 + followersTokenAmount} title='redeemed by users' colorScheme='primary' />
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ps-3 ps-sm-0 ps-md-3 ps-lg-5 ps-xl-5 ps-xxl-5">
                <div className="row mt-3 m-auto justify-content-between">
                    <h6 className={`fw-8 ${css`font-size: 0.8rem`}`}>MONTHLY REVIEW</h6>
                    <TokenData amount={followersTokenAmount} title='circulating among followers' colorScheme='secondary' />
                    <TokenData amount={145051} title='restocked to balance' colorScheme='primary' />
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-11">
                        <LineChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}