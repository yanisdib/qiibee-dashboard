import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { brandsReducer } from '../../reducers/brands';
import { getBrandsEpic } from '../../epics/brands';
import { authReducer } from '../../reducers/auth';
import { authLoginEpic, authLogoutEpic, authSessionEpic, updateFollowingEpic } from '../../epics/auth';
import { usersReducer } from '../../reducers/users';
import { authNewUserEpic, updateUsersTokenEpic, usersEpic } from '../../epics/users';


export const rootReducer = combineReducers(
    {
        auth: authReducer,
        brands: brandsReducer,
        users: usersReducer
    }
);
export const rootEpic = combineEpics(
    authLoginEpic,
    authSessionEpic,
    authLogoutEpic,
    getBrandsEpic,
    usersEpic,
    authNewUserEpic,
    updateUsersTokenEpic,
    updateFollowingEpic
);

