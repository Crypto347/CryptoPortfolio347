/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as Utility from "../utility";
import uuid from "uuid";

/**
* Initial State
*/

export const initialState = {
    items: [],
    loading: false,
    error: null,
}

const fetchTwoColumnsWidePageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchTwoColumnsWidePageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchTwoColumnsWidePageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const twoColumnsWidePageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_BEGIN:
            return fetchTwoColumnsWidePageBegin (state, action); 
        case actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_SUCCESS:
            return fetchTwoColumnsWidePageSuccess (state, action);
        case actionTypes.FETCH_TWO_COLUMNS_WIDE_PAGE_FAILURE:
            return fetchTwoColumnsWidePageFailur(state, action);
        default: 
            return state;
    }
}

export default twoColumnsWidePageReducer;
