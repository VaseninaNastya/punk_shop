import { INIT_NUMBERS_OF_PAGE, CHANGE_NUMBERS_OF_PAGE } from "./actionTypes";
import numbers from '../utils/numbers.utils.js'
import ProductsAPI from '../servises/punkAPI';
const productsAPI = new ProductsAPI();


export const initNumbersOfPageAction = () => async (dispatch) =>{
    const response = await productsAPI.getData()
    dispatch({type: INIT_NUMBERS_OF_PAGE,
    payload: Math.ceil(response.length/numbers.numberOfPageProducts)})
};
export const changeNumbersOfPageAction = (arr) => {
    console.log("arr", arr)
    console.log("number",  Math.ceil(arr.length/numbers.numberOfPageProducts))
    return {
        type: CHANGE_NUMBERS_OF_PAGE,
        payload: Math.ceil(arr.length/numbers.numberOfPageProducts)
    }
};

