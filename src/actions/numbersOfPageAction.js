import { INIT_NUMBERS_OF_PAGE, CHANGE_NUMBERS_OF_PAGE } from "./actionTypes";
import numbers from '../constants/numbers.constants.js'
import ProductsAPI from '../servises/punkAPI';
const productsAPI = new ProductsAPI();


export const initNumbersOfPageAction = () => async (dispatch) =>{
    const response = await productsAPI.getData()
    dispatch({type: INIT_NUMBERS_OF_PAGE,
    payload: Math.ceil(response.length/numbers.numberOfPageProducts)})
};
export const changeNumbersOfPageAction = (arr) => {
    return {
        type: CHANGE_NUMBERS_OF_PAGE,
        payload: Math.ceil(arr.length/numbers.numberOfPageProducts)
    }
};

