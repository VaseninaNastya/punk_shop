import { PRODUCT_SEARCH } from "../actions/actionTypes";

const initialState = {
  products: []
};

const productSearchReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_SEARCH:
      if(!payload.str.length){
        return{...state, products:[]}
      }
      return {...state, products: payload.products.filter((item)=>item.name.toLowerCase().includes(payload.str.toLowerCase()))};
    default:
      return state;
  }
};

export default productSearchReduser;


