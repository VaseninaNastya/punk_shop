import {  SET_ACTIVE_PAGE, INIT_ACTIVE_PAGE, INCREASE_ACTIVE_PAGE, DECREASE_ACTIVE_PAGE} from "./actionTypes";

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

export const increaseActivePageAction = () =>{
    return {
        type: INCREASE_ACTIVE_PAGE,
    }
}
export const decreaseActivePageAction = () =>{
    return {
        type: DECREASE_ACTIVE_PAGE,
    }
}