import { PRODUCT_SEARCH } from "../actions/actionTypes";

const initialState = {
  products: []
};

const productSearchReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_SEARCH:
      return {...state, products: payload.products.filter((item)=>item.name.toLowerCase().includes(payload.str.toLowerCase()))};
 
    //return {...state, products: payload.products.filter((item)=>item.name == payload.str)};
    default:
      return state;
  }
};

export default productSearchReduser;


