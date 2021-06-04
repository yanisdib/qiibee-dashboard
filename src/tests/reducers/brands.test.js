import { brandsReducer } from '../../reducers/brands';

test('should set default state', () => {
    const state = brandsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should set brands state', () => {
    const brands = [
        {
            name: "Air France",
            symbol: "AFR",
            logoUri: "https://firebasestorage.googleapis.com/v0/b/qiibee-challenge.appspot.com/o/brand_logos%2Fafr_logo.jpg?alt=media&token=0f890566-4dfa-43e7-bcd3-e023a4a4174d",
            tokenMax: 75645855,
            redeem: 15
        },
        {
            name: "Apple",
            symbol: "APL",
            logoUri: "https://firebasestorage.googleapis.com/v0/b/qiibee-challenge.appspot.com/o/brand_logos%2Fapl_logo.jpg?alt=media&token=01799e88-29c9-4d2c-b67b-38d308568f92",
            tokenMax: 4866457,
            redeem: 30
        }
    ];
    const action = {
        type: 'GET_BRANDS_SUCCESS',
        brands
    };
    const state = brandsReducer({ isLoading: true }, action);
    expect(state).toEqual(brands);
})