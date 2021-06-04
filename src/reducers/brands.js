const brandsDefaultState = [];

export const brandsReducer = (state = brandsDefaultState, action) => {
    switch (action.type) {
        case "GET_BRANDS_REQUEST":
            return { isLoading: true }
        case "GET_BRANDS_SUCCESS":
            return action.brands;
        default: return state;
    };
};