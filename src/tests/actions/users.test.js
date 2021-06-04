import { createUserRequest, createUserSuccess, updateUsersTokenRequest, updateUsersTokenSuccess } from "../../actions/users"
import users from '../fixtures/users.json';

test('should trigger users epic', () => {
    const user = {
        firstname: 'Yanis',
        lastname: 'Dib',
        email: 'contact@yanisdib.com',
        password: '456Qiibee',
        isBrand: false
    };
    const action = createUserRequest(user);
    expect(action).toEqual({
        type: 'CREATE_USER_REQUEST',
        user
    });
});

test('should generate user object and push to users', () => {
    const user = {
        firstname: 'Yanis',
        lastname: 'Dib',
        email: 'contact@yanisdib.com',
        password: '456Qiibee',
        isBrand: false
    };
    const action = createUserSuccess(user);
    expect(action).toEqual({
        type: 'CREATE_USER_SUCCESS',
        user
    });
});

test('should trigger updateUserToken epic with selected users', () => {
    const selectedUsers = ['johndoe@qiibee.com', 'contact@yanisdib.com', 'random@random.com'];
    const action = updateUsersTokenRequest(selectedUsers);
    expect(action).toEqual({
        type: 'UPDATE_USERS_TOKENS_REQUEST',
        selectedUsers
    });
});

test('should update selected users tokens', () => {
    const action = updateUsersTokenSuccess(users);
    expect(action).toEqual({
        type: 'UPDATE_USERS_TOKENS_SUCCESS',
        users
    });
});

