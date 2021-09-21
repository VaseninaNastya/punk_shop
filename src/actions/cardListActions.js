import { FETCH_CARD_LIST } from "./actionTypes";
import ProductsAPI from '../servises/punkAPI';
const productsAPI = new ProductsAPI();

export const cardListAction = () => async (dispatch) =>{
    const response = await productsAPI.getData()
    dispatch({type: FETCH_CARD_LIST,
    payload: response})
};

