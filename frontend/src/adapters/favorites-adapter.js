import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api/user:id';

export const addFavorite = ({
    biz_id,
    name,
    address,
    type,
    working_hours,
    number,
    price_level,
    rating,
    user_id,
    emoji_rating,
    is_favorited}) => {
     fetchHandler()   
}