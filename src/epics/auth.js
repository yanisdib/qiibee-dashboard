import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { authLoginSuccess, authLogoutSuccess, deleteUserSession, getUserSessionSuccess, setUserSession, updateFollowingSuccess } from '../actions/auth';
// import users from '../api/users.json';

export const authLoginEpic = (action$, state$) => action$.pipe(
    ofType("AUTH_LOGIN_REQUEST"),
    map(({ authData }) => {
        const isRemembered = authData.isRemembered;
        const users = state$.value.users; // for test purposes
        const user = users.find((user) =>
            authData.email === user.email && authData.password === user.password
        );
        if (!user) {
            return { type: 'AUTH_LOGIN_FAILED' }; // Handle no 'email/password' match 

        } else {
            setUserSession({ ...user, isRemembered }); // Set temporary/permanent session if user checked 'remember me'
            return authLoginSuccess({ ...user, isComplete: true });
        };
    })
);

// Handle login before launching app if a session exists
export const authSessionEpic = (action$, state$) => action$.pipe(
    ofType('GET_USER_SESSION_REQUEST'),
    map(({ cookie }) => {
        const email = cookie; // session data (user email)
        const users = state$.value.users; // for test purposes
        const user = users.find(user => user.email === email);
        if (!user) {
            return { type: 'SESSION_NOT_FOUND' } // Handle unexisting session
        } else {
            return getUserSessionSuccess({ ...user, isComplete: true });
        };
    })
);

export const updateFollowingEpic = (action$, state$) => action$.pipe(
    ofType('UPDATE_FOLLOWING_REQUEST'),
    map(({ brandData }) => {
        let authedUser = state$.value.auth;
        authedUser.isFollowing.push(brandData);
        return updateFollowingSuccess(authedUser);
    })
);

export const authLogoutEpic = (action$) => action$.pipe(
    ofType('AUTH_LOGOUT_REQUEST'),
    map(() => {
        sessionStorage.removeItem('qiibee-user');
        localStorage.removeItem('qiibee-user');
        deleteUserSession();
        return authLogoutSuccess(); // Reinitialize 'auth' state
    })
);

