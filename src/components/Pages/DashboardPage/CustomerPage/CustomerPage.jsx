import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBrandsRequest as getBrands } from '../../../../actions/brands';

import LineChart from '../../../LineChart/LineChart';
import TokenData from '../TokenData/TokenData';
import BrandsList from "./BrandsList/BrandList";


export default function CustomerPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, []);
    
    const brands = useSelector(state => state.brands);
    //const loading = useSelector(state => state.brands.isLoading); // used later to set spinner if brands haven't loaded yet
    const auth = useSelector(state => state.auth);
    const isFollowed = auth.isFollowing ? (
        brands
            .filter(item => auth.isFollowing
                .some(brand => brand.symbol === item.symbol)
            )
    ) : ([]);

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
            label: 'Tokens obtained',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1458, 2854, 789, 1256, 1500, 2524, 45],
        }]
    };


    return (
        <div className="row ms-0 ms-md-0 ms-lg-0 ms-xl-5 ms-xxl-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <BrandsList brands={brands} isFollowed={isFollowed} />
                <div className="row mt-3 mb-4 m-auto justify-content-between">
                    <h6 className={`fw-8 ${css`font-size: 0.8rem`}`}>TOKEN OVERVIEW</h6>         
                    <TokenData amount={15000574} title='rewarded by brands' colorScheme='secondary' />
                    <TokenData amount={27400574} title='redeemed from brands' colorScheme='primary' />
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ps-3 ps-sm-0 ps-md-3 ps-lg-5 ps-xl-5 ps-xxl-5">
                <div className="row mt-3 m-auto justify-content-between">
                    <h6 className={`fw-8 ${css`font-size: 0.8rem`}`}>MONTHLY REVIEW</h6>
                    <TokenData amount={1074} title='rewarded by brands' colorScheme='secondary' />
                    <TokenData amount={1450} title='redeemed from brands' colorScheme='primary' />
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