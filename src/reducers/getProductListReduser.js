import { FETCH_PRODUCT_LIST } from "../actions/actionTypes";

const initialState = {
  products: []
};
//в рерьюсер передается стейт и action
const getProductListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_LIST:
      return {...state, products: payload};
    default:
      return state;
  }
};

export default getProductListReduser;



/*import { FETCH_PRODUCT_LIST, GET_CARD_PRODUCT } from "../actions/actionTypes";

const initialState = {
  products: [],
  cardProducts: {}
};

const cardListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_LIST:
      return {...state, products: payload};
    case GET_CARD_PRODUCT:
        return {...state, products: payload};
    default:
      return state;
  }
};

export default cardListReduser;*/