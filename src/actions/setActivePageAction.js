import {  SET_ACTIVE_PAGE, INIT_ACTIVE_PAGE } from "./actionTypes";

export const setActivePageAction = (pageId) =>{

    return {
        type: SET_ACTIVE_PAGE,
        payload: pageId
    }
}

export const initActivePageAction = () =>{
    return {
        type: INIT_ACTIVE_PAGE,
    }
}
