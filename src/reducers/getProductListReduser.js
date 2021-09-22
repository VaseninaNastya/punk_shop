import { FETCH_PRODUCT_LIST } from "../actions/actionTypes";

const initialState = {
  products: []
};

const getProductListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_LIST:
      return {...state, products: payload};
    default:
      return state;
  }
};

export default getProductListReduser;


