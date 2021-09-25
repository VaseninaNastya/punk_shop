import { PRODUCT_SORT } from "./actionTypes";

export const productSortAction= (value) =>{
    return {
        type: PRODUCT_SORT,
        payload: value
    }
}
