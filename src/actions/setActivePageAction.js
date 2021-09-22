import {  SET_ACTIVE_PAGE } from "./actionTypes";

export const setActivePage = (pageId) =>{
    console.log('pageId', pageId)
    return {
        type: SET_ACTIVE_PAGE,
        payload: pageId
    }
}

