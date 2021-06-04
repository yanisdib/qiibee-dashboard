import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export default function RecentActionsList() {
    // This is a simple sample for design purpose
    const recentActions = [
        {
            logo: 'https://firebasestorage.googleapis.com/v0/b/qiibee-challenge.appspot.com/o/brand_logos%2Fxbx_logo.jpg?alt=media&token=6b3cecda-ed3f-490d-97bb-684231308c4b',
            action: 'follow',
            from: 'Microsoft Xbox'
        },
        {
            logo: 'https://firebasestorage.googleapis.com/v0/b/qiibee-challenge.appspot.com/o/brand_logos%2Fzld_logo.jpg?alt=media&token=3864ee80-1fc0-44a3-9ec6-7a443cf94605',
            action: 'redeem',
            from: 'Zalando'
        },
        {
            logo: 'https://firebasestorage.googleapis.com/v0/b/qiibee-challenge.appspot.com/o/brand_logos%2Fafr_logo.jpg?alt=media&token=0f890566-4dfa-43e7-bcd3-e023a4a4174d',
            action: 'reward',
            from: 'Air France'
        }
    ];

    const renderRecentActions = recentActions.map(recentAction => {
        const { logo, action, from } = recentAction;
        const path = from
            .replace(/\s/g, '')
            .toLowerCase();
        switch (action) {
            case 'follow':
                return (
                    <div className="row mt-2 ps-3 align-items-center">
                        <div className={`col-2 ${css`
                                background-image: url(${logo});
                                background-size: cover;
                                background-position: center;
                                border: 2px solid #005fff;
                                max-width: 25px !important;
                                height: 25px;
                                border-radius: 0.8rem;
                            `}`}>
                        </div>
                        <div className="col-10">
                            <small className="fw-5">
                                You started to follow <Link to={`p/${path}`}>{from}</Link>
                            </small>
                        </div>
                    </div>
                );
            case 'redeem':
                return (
                    <div className="row mt-2 ps-3 align-items-center">
                        <div className={`col-2 ${css`
                                background-image: url(${logo});
                                background-size: cover;
                                background-position: center;
                                border: 2px solid #005fff;
                                max-width: 25px !important;
                                height: 25px;
                                border-radius: 0.8rem;
                            `}`}>
                        </div>
                        <div className="col-10">
                            <small className="fw-5">
                                You redeemed 30 ZLD from <Link to={`p/${path}`}>{from}</Link>
                            </small>
                        </div>
                    </div>
                );
            case 'reward':
                return (
                    <div className="row mt-2 ps-3 align-items-center">
                        <div className={`col-2 ${css`
                                background-image: url(${logo});
                                background-size: cover;
                                background-position: center;
                                border: 2px solid #005fff;
                                max-width: 25px !important;
                                height: 25px;
                                border-radius: 0.8rem;
                            `}`}>
                        </div>
                        <div className="col-10">
                            <small className="fw-5">
                                You earned 150 from <Link to={`p/${path}`}>{from}</Link>
                            </small>
                        </div>
                    </div>
                );
            default: return "No recent actions...";
        };
    });

    return (
        <div className="row">
            <div className={`col-12 latest-action`}>
                <div className="row">
                    <div className="col ms-md-4 ms-lg-4 ms-xl-4 ms-xxl-4">
                        <h5 className="fw-8 mb-4">Most recent actions</h5>
                        {renderRecentActions}
                        <p className="fw-5 ps-2 mt-3">
                            <a href="">View recent history</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
