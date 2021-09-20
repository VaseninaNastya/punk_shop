//import { FETCH_CARD_LIST, FETCH_CARD_LIST_REJECT, FETCH_CARD_LIST_RESOLVE } from "./actionTypes";
import { FETCH_CARD_LIST } from "./actionTypes";


export const cardListAction = (products) =>({
    type: FETCH_CARD_LIST,
    payload: products
});






/*import punkAPI from "../servises/punkAPI";

export const fetchProducts = () => async (dispatch) => {
    const response = await punkAPI.get("/beers");
    dispatch({ type: FETCH_CARD_LIST, payload: response.data });
};
*/








/*export const getData =  () => {
    return dispatch => {
        dispatch(cardListAction());
        axios.get(`https://api.punkapi.com/v2/beers`, {
            isBusy: false
        })
        .then(res => {
            dispatch(cardListResolveAction(res.json()));
        })
        .catch(err => {
            dispatch(cardListRejectAction(err));
        });
    };
};*/






/*
export const cardListResolveAction = (payload) => ({
    type: FETCH_CARD_LIST_RESOLVE,
    payload
});

export const cardListRejectAction = (err) => ({
    type: FETCH_CARD_LIST_REJECT,
    err,
})*/