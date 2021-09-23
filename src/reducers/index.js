import { combineReducers} from 'redux'
import getProductListReduser from './getProductListReduser';
import cardProductReduser from './cardProductReduser';
import numbersOfPageReduser from './numbersOfPageReduser';
import {setProductListReduser} from './paginationReduser';
import productSearchReduser from './productSearchReduser'

const redusers = combineReducers({
    productsList: getProductListReduser,
    cardProduct: cardProductReduser,
    numbersOfPage: numbersOfPageReduser,
    activePage: setProductListReduser,
    productSearch: productSearchReduser,
});
export default redusers