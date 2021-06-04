export const getBrandsRequest = () => ({
    type: "GET_BRANDS_REQUEST",
});

// Would normally take no params and fetch directly from database
// This is just made for design test purposes
export const getBrandsData = (users) => {
        const brands = users.filter(user => user.isBrand);
        const brandsData = brands.map(brand => brand.brandData);
        return brandsData;
};

export const getBrandsSuccess = (brands) => ({
    type: "GET_BRANDS_SUCCESS",
    brands
});