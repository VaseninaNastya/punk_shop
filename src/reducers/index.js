import { combineReducers} from 'redux'
import getProductListReduser from './getProductListReduser';
import cardProductReduser from './cardProductReduser'
const redusers = combineReducers({
    productsList: getProductListReduser,
    cardProduct: cardProductReduser,
});
export default redusers