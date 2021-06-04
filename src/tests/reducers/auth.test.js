import users from '../fixtures/users.json';
import { authReducer } from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set state to isLoading', () => {
    const authData = { email: 'johndoe@qiibee.com', password: '123Qiibee' };
    const action = {
        type: 'AUTH_LOGIN_REQUEST',
        isLoading: true,
        authData
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ isLoading: true });
});

test('should set error state on failure', () => {
    const action = {
        type: 'AUTH_LOGIN_FAILED',
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ error: 'USER_NOT_FOUND' });
});

test('should set state with logged user found as auth', () => {
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
            }
        ]
    };
    const action = {
        type: 'AUTH_LOGIN_SUCCESS',
        auth
    };
    const state = authReducer({}, action);
    expect(state).toEqual(users[0]);
});

test('should set isComplete if a session is found', () => {
    const action = {
        type: 'GET_USER_SESSION_REQUEST',
        cookie: 'johndoe@qiibee.com',
        isComplete: true
    };

    const state = authReducer({}, action);
    expect(state).toEqual(true);
});

test('should set state when user is found', () => {
    const action = {
        type: 'GET_USER_SESSION_SUCCESS',
        user: users[0]
    };

    const state = authReducer({}, action);
    expect(state).toEqual(users[0]);
});

test('should set isUpdating property when user follows a brand', () => {
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
            }
        ]
    };
    const action = {
        type: 'UPDATE_FOLLOWING_REQUEST',
        brandData: { symbol: 'SCH', tokenOwned: 0 }
    };
    const state = authReducer(auth, action);
    expect(state).toEqual({ ...auth, isUpdating: true });
});

test('should update authed user state', () => {
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
            }
        ]
    };
    const action = {
        type: 'UPDATE_FOLLOWING_SUCCESS',
        auth: users[0]
    };

    const state = authReducer({ ...auth, isUpdating: true }, action);
    expect(state).toEqual({ ...auth, isUpdating: false });
});

test('should reset state on logout', () => {
    const action = {
        type: 'AUTH_LOGOUT_SUCCESS',
        auth: {}
    };
    const state = authReducer(users[0], action);
    expect(state).toEqual({});
})