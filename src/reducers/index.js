import { combineReducers} from 'redux'
import cardListReduser from './cardListReduser';


export default combineReducers({
    cardList: cardListReduser,
});