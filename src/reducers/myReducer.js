import { combineReducers } from 'redux';

const initialState = [];

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DEMO':
            return [...state, action.payload];
        default:
            return state
    }
}

const myReducer = combineReducers({
    testReducer
});

export default myReducer;