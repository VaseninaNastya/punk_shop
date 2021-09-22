import { SET_ACTIVE_PAGE } from "../actions/actionTypes";

const initialState = {
  activePage: 1
};

const setProductListReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PAGE:
      return {...state, activePage: payload};
    default:
      return state;
  }
};

export default setProductListReduser;


