import { ADD_CARD_PRODUCT, REMOVE_CARD_PRODUCT, GET_CARD_PRODUCT } from "./actionTypes";

export const addCardProductAction = (id) =>{
    return {
        type: ADD_CARD_PRODUCT,
        payload: id
    }
}

export const removeCardProductAction = (id) =>{
    return {
        type: REMOVE_CARD_PRODUCT,
        payload: id
    }
}

export const getCardProductsAction = () =>{
  return {
      type: GET_CARD_PRODUCT
  }
}
