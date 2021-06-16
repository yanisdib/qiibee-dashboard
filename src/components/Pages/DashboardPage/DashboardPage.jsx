import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideMenu from './SideMenu/SideMenu';
import SearchBar from '../../SearchBar/SearchBar';
import Button from '../../Button/Button';
import CustomerPage from './CustomerPage/CustomerPage';
import BrandPage from './BrandPage/BrandPage';
import RecentActionsList from './RecentActionsList/RecentActionsList';

import welcomeBg from '../../../assets/images/qiibee_bg.jpg';

export default function DashboardPage() {
    const welcomeWrapperStyle = css`
        display: flex;
        align-items: center;
        align-content: center;
        align-self: center;
        background-image: url(${welcomeBg});
        background-position: center;
        background-size: cover;
        height: 170px;
        border-radius: 1.5rem;
        color: #ffffff;
    `;
    const userAuthed = useSelector(state => state.auth);
    const renderPage = () => {
        if (userAuthed.isBrand) {
            return <BrandPage />;
        };
        return <CustomerPage />;
    };
console.log(typeof userAuthed.isBrand)
    return (
        <div className="dashboard m-auto">
            <SideMenu />
            <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-10 col-xxl-10 dashboard-overview me-3">
                <div className="row mt-4">
                    <div className="col-12">
                        <SearchBar />
                    </div>
                </div>
                <div className="row mt-4 ms-xl-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        {/** Welcome block */}
                        <div className="row welcome">
                            <div className={`col-12 welcome-wrapper ${welcomeWrapperStyle}`}>
                                <div className="row">
                                    <div className="col ms-5">
                                        <h4 className="fw-6">Welcome {userAuthed.firstname},</h4>
                                        <h6 className="fw-5 mb-3">Keep a track on what you missed</h6>
                                        <Link to="/account">
                                            <Button>Account settings</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                        <RecentActionsList /> {/** would take actions as props from database depending on user authed */}
                    </div>
                </div>
                {renderPage()}
            </div>
        </div>
    );
};
