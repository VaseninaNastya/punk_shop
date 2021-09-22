import { SET_ACTIVE_PAGE,  INIT_ACTIVE_PAGE } from "../actions/actionTypes";

const initialState = {
  activePage: 1
};

export const setProductListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PAGE:
      return {...state, activePage: payload};
    default:
      return state;
  }
};
export const initProductListReduser = (state = initialState, { type }) => {
  switch (type) {
    case INIT_ACTIVE_PAGE:
      return {...state};
    default:
      return state;
  }
};


//export default setProductListReduser;

