   
import { ADD_CARD_PRODUCT, REMOVE_CARD_PRODUCT, GET_CARD_PRODUCT} from "../actions/actionTypes";
const initialState = {
  productsInCard: {}
};
const cardProductReduser = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_CARD_PRODUCT:
          console.log("productsInCard", state.productsInCard)
            return {
                ...state,
                
                //productsInCard: Object.defineProperty(state.productsInCard, payload,{ value: payload}) 
                productsInCard: payload
            }
        case REMOVE_CARD_PRODUCT:
            return {
                ...state,
                productsInCard: delete state.productsInCard.payload,
            }
        case GET_CARD_PRODUCT:
            return {...state};
        default: return state;
    }

}

export default cardProductReduser;