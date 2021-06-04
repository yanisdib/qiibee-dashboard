import { usersReducer } from '../../reducers/users';
import users from '../fixtures/users.json';

test('should set default state', () => {
    const state = usersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(users);
});

test('should request the creation of a new user', () => {
    const user = {
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jeandupont@gmail.com',
        password: 'abcdefg',
        isBrand: false
    };
    const action = {
        type: 'CREATE_USER_REQUEST',
        user: user
    };
    const state = usersReducer(users, action);
    expect(state).toEqual(users);
});

test('should create user with email and password', () => {
    const user = {
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jeandupont@gmail.com',
        password: 'abcdefg',
        isBrand: true
    };
    const action = {
        type: 'CREATE_USER_SUCCESS',
        user: user
    };
    const state = usersReducer(users, action);
    expect(state).toEqual([...users, user]);
});

test('should return error when signup failed', () => {
    const error = { error: 'USER_ALREADY_EXISTS' };
    const action = {
        type: 'CREATE_USER_FAILED'
    };
    const state = usersReducer(error, action);
    expect(state).toEqual(error);
});

test('should request token update for selected users', () => {
    const selectedUsers = [{
        email: 'jeandupont@gmail.com',
    }];
    const action = {
        type: 'UPDATE_USERS_TOKENS_REQUEST',
        selectedUsers
    };
    const state = usersReducer(users, action);
    expect(state).toEqual(users);
});

test('should request token update for selected users', () => {
    const action = {
        type: 'UPDATE_USERS_TOKENS_SUCCESS',
        users
    };
    const state = usersReducer(users, action);
    expect(state).toEqual(users);
});