export const createUserRequest = (user) => ({
    type: 'CREATE_USER_REQUEST',
    user
});

export const createUserSuccess = (user) => ({
    type: 'CREATE_USER_SUCCESS',
    user
});

export const updateUsersTokenRequest = (selectedUsers) => ({
    type: 'UPDATE_USERS_TOKENS_REQUEST',
    selectedUsers
});

export const updateUsersTokenSuccess = (users) => ({
    type: 'UPDATE_USERS_TOKENS_SUCCESS',
    users
});