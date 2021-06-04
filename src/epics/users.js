import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import { startAuthLoginRequest } from "../actions/auth";
import { createUserSuccess, updateUsersTokenSuccess } from "../actions/users";

export const usersEpic = (action$, state$) => action$.pipe(
  ofType('CREATE_USER_REQUEST'),
  map(({ user }) => {
    const {
      firstname = '',
      lastname = '',
      email = '',
      password = '',
      isBrand = false
    } = user;
    const users = state$.value.users;
    const isExisting = users.find(key => key.email === user.email);
    if (isExisting) {
      return ({ type: 'CREATE_USER_FAILED' });
    } else {
      // Would add user to database and then return object without password as state in a real context
      const isComplete = isBrand ? false : true;
      user = { firstname, lastname, email, password, isBrand, isComplete };
      return createUserSuccess(user);
    };
  })
);

export const authNewUserEpic = (action$) => action$.pipe(
  ofType('CREATE_USER_SUCCESS'),
  map(({ user }) => startAuthLoginRequest(user))
);

export const updateUsersTokenEpic = (action$, state$) => action$.pipe(
  ofType('UPDATE_USERS_TOKENS_REQUEST'),
  map(({ selectedUsers }) => {
    let users = [...state$.value.users];
    const brand = state$.value.auth.brandData;
    users = users.map(user => {
      selectedUsers.forEach(selectedUser => {
        if (selectedUser === user.email) { // check if the selected user exists
          user.isFollowing.forEach(token => {
            token.tokenOwned += brand.redeem; // updates the token owned by the current selected user
          });
        };
      });
      return user;
    });
    brand.tokenMax -= selectedUsers.length * brand.redeem;
    return updateUsersTokenSuccess(users);
  })
);