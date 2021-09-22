import { GET_NUMBERS_OF_PAGE } from "../actions/actionTypes";

const initialState = {
    numbersOfPage: 1
};
const getNumbersOfPageReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_NUMBERS_OF_PAGE:
            return {
                ...state,
                numbersOfPage: payload
            }
        default: return state;
    }

}

export default getNumbersOfPageReduser;