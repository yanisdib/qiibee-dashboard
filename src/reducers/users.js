import users from '../api/users.json';

const usersDefaultState = users;

export const usersReducer = (state = usersDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_USER_REQUEST':
            return state;
        case 'CREATE_USER_FAILED':
            return { error: 'USER_ALREADY_EXISTS' };
        case 'CREATE_USER_SUCCESS':
            const user = action.user;
            return [...state, user];
        case 'UPDATE_USERS_TOKENS_REQUEST':
            return state;
        case 'UPDATE_USERS_TOKENS_SUCCESS':
            return action.users;
        default: return state;
    };
};