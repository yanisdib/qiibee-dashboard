import { getBrandsData, getBrandsRequest, getBrandsSuccess } from "../../actions/brands"
import users from '../fixtures/users.json';

test('should trigger brands epic', () => {
    const action = getBrandsRequest();
    expect(action).toEqual({
        type: 'GET_BRANDS_REQUEST'
    });
});

test('should fetch brands', () => {
    const brands = getBrandsData(users);
    const action = getBrandsSuccess(brands);
    expect(action).toEqual({
        type: 'GET_BRANDS_SUCCESS',
        brands
    });
});