import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';

import { authLogoutRequest } from '../../../../actions/auth';

// SVG icons
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import bgMenu from '../../../../assets/images/bg_menu.jpg';
import userThumbnail from '../../../../assets/images/user_thumbnail.jpg';


export default function SideMenu() {
    const menuStyle = css`
        position: fixed;
        height: 100vh;
        left: 0;
        background-image: url(${bgMenu});
        background-size: cover;
        background-position: center;
        .auth-status{
            position: absolute;
            max-width: 15px !important;
            height: 15px;
            background-color: #00c51c;
            border-radius: 1rem;
            margin: 0 auto;
            padding: 5px;
            top:106px;
            border: 2px white solid;
        }
    `;

    const dispatch = useDispatch();
    const history = useHistory();
    const menuItems = [
        {
            uri: '/dashboard',
            icon: AppsRoundedIcon,
            onClick: () => { }
        },
        {
            uri: '/tokens',
            icon: AccountBalanceWalletOutlinedIcon,
            onClick: () => { }
        },
        {
            uri: '/account-charts',
            icon: TrendingUpOutlinedIcon,
            onClick: () => { }
        },
        {
            uri: '/settings',
            icon: SettingsOutlinedIcon,
            onClick: () => { }
        },
        {
            uri: '/help',
            icon: LiveHelpOutlinedIcon,
            onClick: () => { }
        },
        {
            uri: '/logout',
            icon: ExitToAppOutlinedIcon,
            onClick: () => {
                dispatch(authLogoutRequest());
                history.push('/login');
            }
        },
    ];

    const renderMenuItems = () => {
        return menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
                <div className={`item-${i} mt-3 mb-3`}>
                    <div className="col-1 menu-item" onClick={item.onClick}>
                        <Link to={`${item.uri}`}>
                            <Icon />
                        </Link>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={`col-2 menu ${menuStyle}`}>
            <div className="row logo mt-3">
                <div className="col-12 text-center">
                    <h5 className="fw-5 logo-text">qiibee</h5>
                </div>
            </div>
            <div className="row active-profile-picture mt-3 mb-5">
                <div
                    className={`col-12 profile-picture-thumbnail ${css`
                        background-image: url(${userThumbnail});
                        background-position: center;
                        background-size: cover;
                        `}
                    `}
                    title="Online"
                >
                </div>
                <div className="auth-status"></div>
            </div>
            <div className="row menu-features">
                <div className="col-12">
                    {renderMenuItems()}
                </div>
            </div>
            <div className="row copyright">
                <div className="d-none d-sm-none d-md-none d-lg-inline d-xl-inline col-0 col-sm-0 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                    <h6 className="fw-6">Powered by qiibee</h6>
                </div>
            </div>
        </div>
    )
}
