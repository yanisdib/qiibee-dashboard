const authDefaultState = {};

export const authReducer = (state = authDefaultState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_REQUEST':
            return { isLoading: true };
        case 'AUTH_LOGIN_FAILED':
            return { error: 'USER_NOT_FOUND' };
        case 'AUTH_LOGIN_SUCCESS':
            return action.auth;
        case 'GET_USER_SESSION_REQUEST':
            return action.isComplete;
        case 'GET_USER_SESSION_SUCCESS':
            return action.user;
        case 'UPDATE_FOLLOWING_REQUEST':
            return { ...state, isUpdating: true };
        case 'UPDATE_FOLLOWING_SUCCESS':
            return { ...action.auth, isUpdating: false };
        case 'AUTH_LOGOUT_SUCCESS':
            return action.auth;
        default: return state;
    };
};