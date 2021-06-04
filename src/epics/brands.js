import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { getBrandsData, getBrandsSuccess } from '../actions/brands';
import users from '../api/users.json';

export const getBrandsEpic = (action$) =>
    action$.pipe(
        ofType('GET_BRANDS_REQUEST'),
        map(() => getBrandsData(users)), // would normally fetch and filter data from a real API/database
        map(res => getBrandsSuccess(res)),
    );