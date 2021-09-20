import { combineReducers} from 'redux'
import cardListReduser from './cardListReduser';

const redusers = combineReducers({
    cardList: cardListReduser
});
export default redusers