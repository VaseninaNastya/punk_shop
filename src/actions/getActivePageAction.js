import {  GET_ACTIVE_PAGE } from "./actionTypes";

export const getActivePage = (pageId) =>{
    return {
        type: GET_ACTIVE_PAGE,
        payload: pageId
    }
}

