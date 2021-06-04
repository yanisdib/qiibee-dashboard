import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { createUserRequest as createUser } from '../../../actions/users';
import { startAuthLoginRequest as login } from '../../../actions/auth';

import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import authBanner from '../../../assets/images/bg_auth_1080x1920.jpg';

export default function AuthenticationPage() {
    const authBackground = {
        backgroundImage: `url(${authBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const pathname = useLocation().pathname;

    const uriData = pathname === '/signup' ?
        {
            path: '/login',
            text: 'I already have an account'
        }
        : {
            path: '/signup',
            text: 'Create an account'
        };

    const isAuthComplete = useSelector(state => state.auth.isComplete);

    // Check if login was successful and redirect user to Dashboard
    // if everything is working
    useEffect(() => {
        if (isAuthComplete) {
            history.push('/dashboard');
        }
    }, [isAuthComplete, history]);

    const onSubmit = (user) => {
        if (pathname === '/login') {
            dispatch(login(user));
        } else if (pathname === '/signup') {
            return dispatch(createUser(user));
        };
    };

    // Render child component depending on url
    const renderChildPage = () => {
        if (pathname === '/login') {
            return <LoginForm onSubmit={onSubmit} />;
        } else if (pathname === '/signup') {
            return <SignupForm onSubmit={onSubmit} />
        }
    };

    return (
        <div className="fullsize-container">
            <div className="auth-wrapper">
                <div className="auth-banner" style={authBackground}>
                    <div className="app-name mt-5">
                        <div className="app-name-wrapper">
                            <h3 className="fw-5">qiibee</h3>
                        </div>
                    </div>
                    <div className="app-phrase h-75">
                        <div className="app-phrase-wrapper">
                            <h1 className="fw-5">
                                The global standard for loyalty on the blockchain
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="auth-form mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0">
                    <div className="form-header mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0">
                        <div className="form-header-wrapper mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0">
                            <h1 className="fw-7 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0">Welcome</h1>
                            <h6 className="fw-4">
                                Create a new account and join our new loyalty program
                            </h6>
                            <p className="fw-5 mt-4">
                                <Link to={uriData.path}>
                                    <PersonOutlineOutlinedIcon />
                                    {uriData.text}
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="form-wrapper mt-5">
                        <div className="form">
                            {
                                renderChildPage()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
