import { GET_NUMBERS_OF_PAGE } from "./actionTypes";
import numbers from '../utils/numbers.utils.js'
import ProductsAPI from '../servises/punkAPI';
const productsAPI = new ProductsAPI();


export const getNumbersOfPageAction = () => async (dispatch) =>{
    const response = await productsAPI.getData()
    dispatch({type: GET_NUMBERS_OF_PAGE,
    payload: Math.ceil(response.length/numbers.numberOfPageProducts)})
};
 