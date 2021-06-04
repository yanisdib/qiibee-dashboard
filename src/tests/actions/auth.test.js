import { authLoginSuccess, authLogoutRequest, authLogoutSuccess, deleteUserSession, getUserSessionRequest, getUserSessionSuccess, setUserSession, startAuthLoginRequest, updateFollowingRequest, updateFollowingSuccess } from "../../actions/auth";
import users from '../fixtures/users.json';

test('should generate trigger authentication', () => {
    const authData = {
        email: 'johndoe@qiibee.com',
        password: '123Qiibee'
    };
    const action = startAuthLoginRequest(authData);
    expect(action).toEqual({
        type: 'AUTH_LOGIN_REQUEST',
        isLoading: true,
        authData
    });
});

test('should generate login object', () => {
    const auth = {
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@qiibee.com",
        "password": "123Qiibee",
        "isBrand": false,
        "isComplete": true,
        "isFollowing": [
            {
                "symbol": "AFR",
                "tokenOwned": 250
            },
            {
                "symbol": "XBX",
                "tokenOwned": 8150
            },
            {
                "symbol": "APL",
                "tokenOwned": 7530
            },
            {
                "symbol": "FTP",
                "tokenOwned": 250
            },
            {
                "symbol": "ZLD",
                "tokenOwned": 455
            }]
    };
    const action = authLoginSuccess(auth);
    expect(action).toEqual({
        type: 'AUTH_LOGIN_SUCCESS',
        auth
    });
});

test('should trigger logout epic', () => {
    const action = authLogoutRequest();
    expect(action).toEqual({ type: 'AUTH_LOGOUT_REQUEST' });
});

test('should generate logout object', () => {
    const action = authLogoutSuccess();
    expect(action).toEqual({ type: 'AUTH_LOGOUT_SUCCESS', auth: [] });
});

test('should trigger getting session cookie', () => {
    const cookie = 'johndoe@qiibee.com';
    const action = getUserSessionRequest(cookie);
    expect(action).toEqual({
        type: 'GET_USER_SESSION_REQUEST',
        cookie,
        isComplete: false
    });
});

test('should generate a session cookie', () => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();
    const user = { email: 'johndoe@qiibee.com', isRemembered: true };
    setUserSession(user);
    expect(localStorage.setItem).toHaveBeenCalled();
});

test('should get the session cookie from localStorage or sessionStorage', () => {
    const user = {
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@qiibee.com",
        "password": "123Qiibee",
        "isBrand": false,
        "isComplete": true,
        "isFollowing": [
            {
                "symbol": "AFR",
                "tokenOwned": 250
            },
            {
                "symbol": "XBX",
                "tokenOwned": 8150
            },
            {
                "symbol": "APL",
                "tokenOwned": 7530
            },
            {
                "symbol": "FTP",
                "tokenOwned": 250
            },
            {
                "symbol": "ZLD",
                "tokenOwned": 455
            }
        ]
    };
    const action = getUserSessionSuccess(user)
    expect(action).toEqual({
        type: 'GET_USER_SESSION_SUCCESS',
        user: users[0]
    });
});

test('should remove session cookie', () => {
    const action = deleteUserSession();
    expect(action).toEqual({
        type: 'DELETE_USER_SESSION'
    });
});

test('should trigger updateFollowingEpic epic', () => {
    const brandData = {symbol: 'SCH', tokenOwned: '0'};
    const action = updateFollowingRequest(brandData);
    expect(action).toEqual({
        type: 'UPDATE_FOLLOWING_REQUEST',
        brandData
    });
});

test('should update following of active user', () => {
    const action = updateFollowingSuccess(users[0]);
    expect(action).toEqual({
        type: 'UPDATE_FOLLOWING_SUCCESS',
        auth: users[0]
    });
});

