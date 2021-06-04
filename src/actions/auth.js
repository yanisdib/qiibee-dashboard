export const startAuthLoginRequest = (authData) => ({
    type: 'AUTH_LOGIN_REQUEST',
    isLoading: true,
    authData
});

export const setUserSession = ({ email, isRemembered }) => {
    return isRemembered ?
        localStorage.setItem('qiibee-user', email)
        : sessionStorage.setItem('qiibee-user', email);
};

export const getUserSessionRequest = (cookie) => ({
    type: 'GET_USER_SESSION_REQUEST',
    cookie,
    isComplete: false
});

export const getUserSessionSuccess = (user) => ({
    type: 'GET_USER_SESSION_SUCCESS',
    user
});

export const authLoginSuccess = (auth) => ({
    type: 'AUTH_LOGIN_SUCCESS',
    auth
});

export const authLogoutRequest = () => ({
    type: 'AUTH_LOGOUT_REQUEST'
});

export const deleteUserSession = () => ({
    type: 'DELETE_USER_SESSION'
});

export const updateFollowingRequest = (brandData) => ({
    type: 'UPDATE_FOLLOWING_REQUEST',
    brandData
});

export const updateFollowingSuccess = (auth) => ({
    type: 'UPDATE_FOLLOWING_SUCCESS',
    auth
});

export const authLogoutSuccess = () => ({
    type: 'AUTH_LOGOUT_SUCCESS',
    auth: []
});