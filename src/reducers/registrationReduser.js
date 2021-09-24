import { OPEN_REGISTRATION_POPUP, CLOSE_REGISTRATION_POPUP } from "../actions/actionTypes";

const initialState = {
  popupActive: false
};

export const registrationReduser = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_REGISTRATION_POPUP:
      return {...state, popupActive: true};
    case CLOSE_REGISTRATION_POPUP:
      return {...state, popupActive: false};
    default:
      return state;
  }
};


