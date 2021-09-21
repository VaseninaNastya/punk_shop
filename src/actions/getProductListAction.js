import { FETCH_PRODUCT_LIST } from "./actionTypes";
import ProductsAPI from '../servises/punkAPI';
const productsAPI = new ProductsAPI();

export const getProductListAction = () => async (dispatch) =>{
    const response = await productsAPI.getData()
    dispatch({type: FETCH_PRODUCT_LIST,
    payload: response})
};
