import { GET_ACTIVE_PAGE } from "../actions/actionTypes";

const initialState = {
  activePage: 1
};

const getProductListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACTIVE_PAGE:
      return {...state, activePage: payload};
    default:
      return state;
  }
};

export default getProductListReduser;


