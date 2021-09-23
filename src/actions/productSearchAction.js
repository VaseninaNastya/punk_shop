import { PRODUCT_SEARCH } from "./actionTypes";

export const productSearchAction = (value) =>{
    return {
        type: PRODUCT_SEARCH,
        payload: value
    }
}
