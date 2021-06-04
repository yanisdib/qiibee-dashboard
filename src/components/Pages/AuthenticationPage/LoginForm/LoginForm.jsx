import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { css } from '@emotion/css';

import InputButton from '../../../Button/InputButton/InputButton';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { checkEmail, checkPassword } from '../../../../utils/form-validators';

export default function LoginForm(props) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [isRemembered, setIsRemembered] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const error = useSelector(state => state.auth.error); // get error from state to determine if actions worked

    // Check if an error has occured when user submits login form
    useEffect(() => {
        if (error === 'USER_NOT_FOUND') {
            setErrorMessage(`This user doesn't exist.`);
        };
    }, [error]);

    const onRememberCheckedChange = (e) => {
        const isChecked = e.target.checked;
        setIsRemembered(isChecked);
    };

    // Fields control to be added
    const onSubmit = (e) => {
        e.preventDefault();
        if (!checkEmail(email)) {
            setErrorMessage('Please provide a correct email adress');
        } else if (!checkPassword(password)) {
            setErrorMessage('Password should contain 8 characters made of alphanumerics and specials')
        }
        else {
            document.getElementById('login-form').reset();
            setErrorMessage('');
            props.onSubmit({
                email: email,
                password: password,
                isRemembered: isRemembered
            });
        };
    };

    return (
        <form id="login-form" onSubmit={onSubmit}>
            <div className="row mt-2">
                <div className="col">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="johndoe@qiibee.com" onChange={onEmailChange} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input type="password" className="form-control mb-2" placeholder="Password" onChange={onPasswordChange} />
                </div>
                <small className={`fw-4 ${css`
                            color: red;
                            `}
                `}>
                    {errorMessage}
                </small>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <p className="fw-5">
                        <a href="">
                            <LockOutlinedIcon />
                            I forgot my password
                        </a>
                    </p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <input type="checkbox" className="form-check-input me-2" id="rememberCheckbox" onChange={onRememberCheckedChange} />
                    <label htmlFor="rememberCheckbox" className="form-check-label" >Remember me</label>
                </div>
                <div className="col text-end">
                    <InputButton value="Log to account" />
                </div>
            </div>
        </form>
    );
}
