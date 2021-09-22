import { combineReducers} from 'redux'
import getProductListReduser from './getProductListReduser';
import cardProductReduser from './cardProductReduser';
import getNumbersOfPageReduser from './getNumbersOfPageReduser';
import {setProductListReduser} from './setActivePageReduser';

const redusers = combineReducers({
    productsList: getProductListReduser,
    cardProduct: cardProductReduser,
    numbersOfPage: getNumbersOfPageReduser,
    activePage: setProductListReduser
});
export default redusers