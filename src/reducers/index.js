import { combineReducers} from 'redux'
import getProductListReduser from './getProductListReduser';
import cardProductReduser from './cardProductReduser';
import getNumbersOfPageReduser from './getNumbersOfPageReduser';
import {setProductListReduser} from './paginationReduser';
import productSearchReduser from './productSearchReduser'

const redusers = combineReducers({
    productsList: getProductListReduser,
    cardProduct: cardProductReduser,
    numbersOfPage: getNumbersOfPageReduser,
    activePage: setProductListReduser,
    productSearch: productSearchReduser,
});
export default redusers