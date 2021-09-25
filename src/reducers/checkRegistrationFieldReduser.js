import {
  CHECK_NAME_FIELD_REGISTRATION_POPUP,
  CHECK_EMAIL_FIELD_REGISTRATION_POPUP,
  CHECK_DATE_FIELD_REGISTRATION_POPUP,
  CHECK_PASSWORD_FIELD_REGISTRATION_POPUP,
  CHECK_ALL_FIELD_REGISTRATION_POPUP
} from "../actions/actionTypes";

const initialState = {
  name: {
    emptyInput: false,
    wrongValue: false,
  },
  email: {
    emptyInput: false,
    wrongValue: false,
  },
  dateOfBirth: {
    emptyInput: false,
    wrongValue: false,
  },
  password: {
    emptyInput: false,
    wrongValue: false,
  },
  allFieldsRight: false
};

export const checkRegistrationFieldReduser = (state = initialState,{ type, payload }) => {
  switch (type) {
    case  CHECK_NAME_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, name: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && payload.value.split(" ").length < 2){
        return { ...state, name: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, name: {emptyInput: false, wrongValue: false,} };
    case  CHECK_EMAIL_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, email: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && !payload.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)){
        return { ...state, email: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, email: {emptyInput: false, wrongValue: false,} };
    case  CHECK_DATE_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, dateOfBirth: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length && !payload.value.match(/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gi)){
        return { ...state, dateOfBirth: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, dateOfBirth: {emptyInput: false, wrongValue: false,} };
    case  CHECK_PASSWORD_FIELD_REGISTRATION_POPUP:
      if(!payload.value.length){
        return { ...state, password: {emptyInput: true, wrongValue: false,} };
      }
      if(payload.value.length < 6){
        return { ...state, password: {emptyInput: false, wrongValue: true,} };
      }
      return { ...state, password: {emptyInput: false, wrongValue: false,} };
    case  CHECK_ALL_FIELD_REGISTRATION_POPUP:
      let result = []
      payload.map((item)=>{
        if ((item.name === 'name' && item.value.length && item.value.split(" ").length >= 2)) {
          result.push(true)
        }
        if (item.name === 'dateOfBirth' && item.value.length && item.value.match(/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gi)) {
          result.push(true)
        }
        if (item.name === 'email' && item.value.length && item.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)) {
          result.push(true)
        }
        if (item.name === 'password' && item.value.length && item.value.length >= 6) {
          result.push(true)
        }
      })
      return { ...state, allFieldsRight: result.length === payload.length };
    default:
      return state;
  }
};
