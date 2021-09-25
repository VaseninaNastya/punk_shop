import {
  CHECK_NAME_FIELD_REGISTRATION_POPUP,
  CHECK_EMAIL_FIELD_REGISTRATION_POPUP,
  CHECK_DATE_FIELD_REGISTRATION_POPUP,
  CHECK_PASSWORD_FIELD_REGISTRATION_POPUP,
  CHECK_ALL_FIELD_REGISTRATION_POPUP
} from "./actionTypes";

export const checkNameFieldRegistrationPopupAction = (value) => {
  return {
    type: CHECK_NAME_FIELD_REGISTRATION_POPUP,
    payload: value,
  };
};
export const checkEmailFieldRegistrationPopupAction = (value) => {
    return {
      type: CHECK_EMAIL_FIELD_REGISTRATION_POPUP,
      payload: value,
    };
  };

  export const checkDateFieldRegistrationPopupAction = (value) => {
    return {
      type: CHECK_DATE_FIELD_REGISTRATION_POPUP,
      payload: value,
    };
  };

  export const checkPasswordFieldRegistrationPopupAction = (value) => {
    return {
      type: CHECK_PASSWORD_FIELD_REGISTRATION_POPUP,
      payload: value,
    };
  };

  export const checkAllFieldRegistrationPopupAction = (value) => {
    return {
      type: CHECK_ALL_FIELD_REGISTRATION_POPUP,
      payload: value,
    };
  };