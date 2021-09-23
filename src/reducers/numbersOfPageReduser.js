import { INIT_NUMBERS_OF_PAGE, CHANGE_NUMBERS_OF_PAGE } from "../actions/actionTypes";

const initialState = {
    numbersOfPage: 1
};
const numbersOfPageReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case INIT_NUMBERS_OF_PAGE:
            return {
                ...state,
                numbersOfPage: payload
            }
            case CHANGE_NUMBERS_OF_PAGE:
                return {
                    ...state,
                    numbersOfPage: payload
                }
        default: return state;
    }

}

export default numbersOfPageReduser;