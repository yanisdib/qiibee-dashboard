import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';


import FollowButton from '../../../../Button/FollowButton/FollowButton';
import ProfileButton from '../../../../Button/ProfileButton/ProfileButton';

import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { updateFollowingRequest } from '../../../../../actions/auth';

export default function BrandsList({ brands, isFollowed }) {
    const dispatch = useDispatch();    
    const unfollowedBrands = brands.filter(brand => !isFollowed.includes(brand));
    const onFollowClick = (e) => {
        const symbol = e.target.dataset.brand;
        const brandData = { symbol, tokenOwned: 0 };
        dispatch(updateFollowingRequest(brandData));
    };

    const brandsSelection = unfollowedBrands.map((item, i) => {
        return i < 6 ? (
            <div className="row align-items-center justify-content-center mt-3">
                <div className={`col-2 ${css`
                    background-image: url(${item.logoUri});
                    background-size: cover;
                    background-position: center;
                    max-width: 40px !important;
                    height:40px;
                    border-radius: 0.8rem;
                `}`}>
                </div>
                <div className="col-6 ps-3">
                    <h6 className="fw-7 m-auto">
                        <a href="">
                            {item.name}
                        </a>
                    </h6>
                    <small className="fw-5 figure">
                        {`${item.tokenMax} ${item.symbol}`}
                    </small>
                </div>

                <div className={`col-4 ${css`
                            svg{font-size: 1.15rem;}
                            justify-self: end;
                        `}
                    `}>
                    <FollowButton symbol={item.symbol} onClick={onFollowClick}><PersonAddOutlinedIcon /> Follow</FollowButton>
                </div>
            </div>
        ) : (null);
    });

    const followedBrandsList = isFollowed.length > 0 ? isFollowed.map((item, i) => {
        return i < 6 ? (
            <div className="row align-items-center justify-content-center mt-3">
                <div className={`col-2 ${css`
                    background-image: url(${item.logoUri});
                    background-size: cover;
                    background-position: center;
                    max-width: 40px !important;
                    height:40px;
                    border-radius: 0.8rem;
                `}`}>
                </div>
                <div className="col-6 ps-3">
                    <h6 className="fw-7 m-auto">
                        <a href="">
                            {item.name}
                        </a>
                    </h6>
                    <small className="fw-5 figure">
                        {`${item.tokenMax} ${item.symbol}`}
                    </small>
                </div>

                <div className="col-4 justify-self-end">
                    <ProfileButton>Profile</ProfileButton>
                </div>
            </div>
        ) : (null);
    }) : (
        <div className="row align-items-center justify-content-center mt-3">
            <div className="col text-center">
                <small>You are following no brands</small>
            </div>
        </div>
    );

    return (
        <div className="row">
            <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 pt-3`}>
                <h5 className={`fw-8 ${css`color: #000000;`}`}>
                    Selection of brands
                </h5>
                <small className="mb-5 fw-5">Follow new brands and earn new tokens</small>
                {brandsSelection}
                <p className="fw-5 mt-4 p-0">
                    <a href="">
                        View all brands
                    </a>
                </p>
            </div>
            <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 pt-3`}>
                <h5 className={`fw-8 ${css`color: #000000;`}`}>
                    Following
                </h5>
                <small className="mb-5 fw-5">Redeem tokens from brands you follow</small>
                {followedBrandsList}
                <p className="fw-5 mt-4 p-0">
                    <a href="">
                        View all followed brands
                    </a>
                </p>
            </div>
        </div>
    );
}
