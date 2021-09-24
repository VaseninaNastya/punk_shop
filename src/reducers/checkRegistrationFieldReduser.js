import {
  CHECK_NAME_FIELD_REGISTRATION_POPUP,
  CHECK_EMAIL_FIELD_REGISTRATION_POPUP,
  CHECK_DATE_FIELD_REGISTRATION_POPUP,
  CHECK_PASSWORD_FIELD_REGISTRATION_POPUP,
} from "../actions/actionTypes";

const initialState = {
  nameInput: {
    emptyInput: false,
    wrongValue: false,
  },
  emailInput: {
    emptyInput: false,
    wrongValue: false,
  },
  dateInput: {
    emptyInput: false,
    wrongValue: false,
  },
  passwordInput: {
    emptyInput: false,
    wrongValue: false,
  },
};

export const checkRegistrationFieldReduser = (state = initialState,{ type, payload }) => {
  switch (type) {
    case  CHECK_NAME_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, nameInput: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && payload.value.split(" ").length < 2){
        return { ...state, nameInput: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, nameInput: {emptyInput: false, wrongValue: false,} };
    case  CHECK_EMAIL_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, emailInput: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && !payload.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)){
        return { ...state, emailInput: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, emailInput: {emptyInput: false, wrongValue: false,} };
    case  CHECK_DATE_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, dateInput: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && !payload.value.match(/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gi)){
        return { ...state, dateInput: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, dateInput: {emptyInput: false, wrongValue: false,} };
    case  CHECK_PASSWORD_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, passwordInput: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length < 6){
        return { ...state, passwordInput: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, passwordInput: {emptyInput: false, wrongValue: false,} };
    default:
      return state;
  }
};
