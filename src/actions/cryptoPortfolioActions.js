import * as actionTypes from '../constants/actionTypes';

export function initMenuItems(array) {
    return { 
        type: actionTypes.INIT_MENU_ITEMS,
        array: array
    };
};

export function photoViewerOpen(option, val, array) {
    return { 
        type: actionTypes.PHOTO_VIEWER_OPEN,
        option: option,
        val: val,
        array: array
    };
};

export function prevImage() {
    return { 
        type: actionTypes.PREV_IMAGE
    };
};

export function nextImage() {
    return { 
        type: actionTypes.NEXT_IMAGE
    };
};

export function setSwiperState(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};
