import { combineReducers } from 'redux';

const initialState = [];

const fxCalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DEMO':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default fxCalculatorReducer;