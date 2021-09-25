import { PRODUCT_SORT } from "../actions/actionTypes";

const initialState = {
  products: []
};

const productSortReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_SORT:




    
      return {...state, products: payload};
    default:
      return state;
  }
};

export default productSortReduser;


