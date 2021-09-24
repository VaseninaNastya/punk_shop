import { OPEN_REGISTRATION_POPUP, CLOSE_REGISTRATION_POPUP } from "./actionTypes";

export const openRegistrationPopupAction = () =>{
    return {
        type: OPEN_REGISTRATION_POPUP
    }
}


export const closeRegistrationPopupAction = () =>{
    return {
        type: CLOSE_REGISTRATION_POPUP
    }
}