import { css } from '@emotion/css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { checkEmail, checkPassword, checkText } from '../../../../utils/form-validators';
import useInput from '../../../../hooks/useInput';

import Button from '../../../Button/Button';

export default function SignupForm(props) {
    const [firstname, onFirstnameChange] = useInput('');
    const [lastname, onLastnameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [isBrand, onIsBrandChange] = useInput('');
    const [errorMessage, setErrorMessage] = useState('');
    const error = useSelector(state => state.users.error); // get error from state to determine if actions worked

    // Check if an error has occured when user submits login form
    useEffect(() => {
        if (error === 'USER_ALREADY_EXISTS') {
            setErrorMessage(`This user already exist.`);
        };
    }, [error]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!checkEmail(email)) {
            setErrorMessage('Please provide a correct email adress');
        } else if (!checkPassword(password)) {
            setErrorMessage('Password should contain 8 characters made of alphanumerics and symbols');
        } else if (!checkText(firstname) && !checkText(lastname)) {
            setErrorMessage('Your name cannot contain numbers and symbols');
        } else if (isBrand === '') {
            setErrorMessage('Please tell us if you are a brand or a customer');
        } else {
            props.onSubmit({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                isBrand: isBrand
            });
        };
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row mb-5 text-center">
                <div className="col">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="brandRadio"
                        name="userType"
                        value={true}
                        onChange={onIsBrandChange}
                    />
                    <label htmlFor="brandRadio" className="form-label form-check-label ms-3">
                        I represent a brand
                    </label>
                </div>
                <div className="col">
                    <input type="radio"
                        className="form-check-input"
                        id="customerRadio"
                        name="userType"
                        value={false}
                        onChange={onIsBrandChange}
                    />
                    <label htmlFor="customerRadio" className="form-label form-check-label ms-3">
                        I am a customer
                    </label>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <label htmlFor="firstnameInput" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="John"
                        onChange={onFirstnameChange}
                    />
                </div>
                <div className="col">
                    <label htmlFor="lastnameInput" className="form-label">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                        onChange={onLastnameChange}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="johndoe@qiibee.com"
                        onChange={onEmailChange}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Password"
                        onChange={onPasswordChange}
                    />
                    <small id="passwordHelp" className="fw-4">At least 8 alphanumeric and special characters</small>
                </div>
                <small className={`fw-4 ${css`
                            color: red;
                            `}
                `}>
                    {errorMessage}
                </small>
            </div>
            <div className="row mt-3">
                <div className="col text-end">
                    <Button>Create an account</Button>
                </div>
            </div>
        </form>
    );
}
