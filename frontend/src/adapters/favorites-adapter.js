import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api/user/:id';
const placeUrl = '/api/placeFavorites/'

export const addFavorite = async ({
    biz_id,
    name,
    address,
    city,
    state,
    type,
    working_hours,
    number,
    price_level,
    photo_url,
    website,
    rating,
    user_id,
    emoji_rating}) => {
    fetchHandler(baseUrl, getPostOptions({
        biz_id,
        name,
        address,
        city,
        state,
        type,
        working_hours,
        number,
        price_level,
        photo_url,
        website,
        rating,
        user_id,
        emoji_rating
    }))
};

export const listFavorite = async () => {
    const [favorite, error] = await fetchHandler(baseUrl);
    if(error) console.log(error);
    return favorite || [];
};


export const listAllFavorites = async (user_id) => {
    const [favorites, error] = await fetchHandler(placeUrl + user_id);
    if(error) console.log(error);
    console.log(favorites)
    return favorites || [];
};

export const removeFavorite = async () => {
    const [favorite, error] = await fetchHandler(baseUrl, deleteOptions);
    if(error) console.log(error);
    return favorite || [];
};
