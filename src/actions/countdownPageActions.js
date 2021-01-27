import * as actionTypes from '../constants/actionTypes';

export function fetchCountdownPageSection1DataBegin() {
    return { 
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_BEGIN
    };
};

export function fetchCountdownPageSection1DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_SUCCESS,
        array: array
    };
};

export function fetchCountdownPageSection1DataFailur(err) {
    return {
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_1_DATA_FAILURE,
        err: err
    };
};

export function fetchCountdownPageSection2DataBegin() {
    return { 
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_BEGIN
    };
};

export function fetchCountdownPageSection2DataSuccess(array) {
    return { 
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_SUCCESS,
        array: array
    };
};

export function fetchCountdownPageSection2DataFailur(err) {
    return { 
        type: actionTypes.FETCH_COUNTDOWN_PAGE_SECTION_2_DATA_FAILURE,
        err: err
    };
};

export function countdownValueForCountdownPageSection1(countdownKey, opt) {
    return { 
        type: actionTypes.COUNTDOWN_VALUE_FOR_COUNTDOWN_PAGE_SECTION_1,
        countdownKey: countdownKey,
        opt: opt
    };
};

export function countdownValueForCountdownPageSection2(countdownKey, opt) {
    return { 
        type: actionTypes.COUNTDOWN_VALUE_FOR_COUNTDOWN_PAGE_SECTION_2,
        countdownKey: countdownKey,
        opt: opt
    };
};
