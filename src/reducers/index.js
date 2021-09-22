import { combineReducers} from 'redux'
import getProductListReduser from './getProductListReduser';
import cardProductReduser from './cardProductReduser'
import getNumbersOfPageReduser from './getNumbersOfPageReduser'
const redusers = combineReducers({
    productsList: getProductListReduser,
    cardProduct: cardProductReduser,
    getNumbersOfPage: getNumbersOfPageReduser
});
export default redusers