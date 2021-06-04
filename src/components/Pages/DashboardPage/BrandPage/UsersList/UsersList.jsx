import { css } from '@emotion/css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsersTokenRequest } from '../../../../../actions/users';

import InputButton from '../../../../Button/InputButton/InputButton';

export default function UsersList({ auth, followers }) {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [redeemMessage, setRedeemMessage] = useState('');
    const onUserChecked = (e) => {
        const user = e.target.name;
        const isChecked = e.target.checked;
        if (!isChecked) {
            const selectedUsersClone = selectedUsers.filter(selectedUser => selectedUser !== user);
            setSelectedUsers(selectedUsersClone);
        } else {
            setSelectedUsers([...selectedUsers, user]);
        };
    };

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (auth.brandData.tokenMax >= selectedUsers.length * auth.brandData.redeem) {
            dispatch(updateUsersTokenRequest(selectedUsers));
        }
        else {
            setRedeemMessage('Your current Tokens balance does not allow you to redeem this many users');
        };
    };
    const followersList = followers.length > 0 ? followers.map((follower, i) => {
        const userBrandData = follower.isFollowing.find(data => data.symbol === auth.brandData.symbol);
        return (
            <div key={`follower-${i}`} className="row align-items-center justify-content-start mt-3">
                <div className="col-1">
                    <input type="checkbox" id={`user-${i}`} name={follower.email} onChange={onUserChecked} />
                </div>
                <div className={`col-2 ${css`
                    background-color: #000000;
                    max-width: 40px !important;
                    height:40px;
                    border-radius: 0.8rem;
                `}`}>
                </div>
                <div className="col-3 m-auto">
                    <p className="fw-5" htmlFor={`user-${i}`}>{`${follower.firstname} ${follower.lastname}`}</p>
                </div>
                <div className="col-3 m-auto">
                    <p className="fw-6 figure">{userBrandData.tokenOwned + userBrandData.symbol}</p>
                </div>
            </div>)
    }) : (
        <div className="row align-items-center justify-content-center mt-3">
            <div className="col text-center">
                <small>No user is currently following you...</small>
            </div>
        </div>
    );

    return (
        <div className="row">
            <div className={`col-12 pt-3`}>
                <h5 className={`fw-8 ${css`color: #000000;`}`}>
                    Followers
                </h5>
                <small className="mb-5 fw-5">Reward your followers with tokens</small>
                <form onSubmit={onSubmit}>
                    {followersList}
                    <small className={`fw-4 ${css`
                            color: red;
                            `}`}
                    >
                        {redeemMessage}
                    </small>
                    <div className="row mt-4 text-start">
                        <div className="col-10">
                            <InputButton value="Send tokens" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
