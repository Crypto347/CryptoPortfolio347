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
    itemsCooradinateRange: [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ],
}

const fetchPortfolioGalleryPageBegin = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    };
}

const fetchPortfolioGalleryPageSuccess = (state, action) => {    
    return {
        ...state,
        loading: false,
        items: action.array
    };
}

const fetchPortfolioGalleryPageFailur = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err,
        items: []
    };
}

const rememberCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    let updatedItemsCooradinateRange = [...state.itemsCooradinateRange];
    
    let objIndex = updatedItemsCooradinateRange.findIndex(item => item.id === action.id);
    updatedItemsCooradinateRange.splice(objIndex, 1, action.coordinateRange);

    return {
        ...state,
        itemsCooradinateRange: updatedItemsCooradinateRange
    };
}

const forgetCoordinateRangeForPortfolioGalleryPage = (state, action) => {
    return {
        ...state,
        itemsCooradinateRange: action.arr
    };
}

const section1Reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN:
            return fetchPortfolioGalleryPageBegin (state, action); 
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS:
            return fetchPortfolioGalleryPageSuccess (state, action);
        case actionTypes.FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE:
            return fetchPortfolioGalleryPageFailur(state, action);
        case actionTypes.REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return rememberCoordinateRangeForPortfolioGalleryPage(state, action);
        case actionTypes.FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE:
            return forgetCoordinateRangeForPortfolioGalleryPage(state, action);
        default: 
            return state;
    }
}

export default section1Reducer;
