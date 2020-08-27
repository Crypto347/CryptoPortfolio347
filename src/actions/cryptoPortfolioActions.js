import * as actionTypes from '../constants/actionTypes';

export function initMenuItems(array) {
    return { 
        type: actionTypes.INIT_MENU_ITEMS,
        array: array
    };
};

export function initMenuFullscreenItems(array) {
    return { 
        type: actionTypes.INIT_MENU_FULLSCREEN_ITEMS,
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

export function setIsHoveringMenuItem(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_ITEM,
        val: val,
        id: id
    };
};

export function setIsHoveringToolbarOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_TOOLBAR_OPTION_ITEM,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function setIsHoveringToolbarSubOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM,
        val: val,
        pathOfIds
    };
};

export function setIsHoveringMenuFullscreenItem(val, id) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_ITEM,
        val: val,
        id: id
    };
};

export function setIsHoveringMenuFullscreenOptionItem(val, pathOfIds) {
    return { 
        type: actionTypes.SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM,
        val: val,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfToolbarOptionItem(pathOfIds) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfToolbarSubOptionItem(pathOfIds) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM,
        pathOfIds: pathOfIds
    };
};

export function setActivityOfMenuFullscreenItem(val, id) {
    return { 
        type: actionTypes.SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM,
        val: val,
        id: id
    };
};

export function setSidebarState(val) {
    return { 
        type: actionTypes.SET_SIDEBAR_STATE,
        val: val
    };
};

export function activateMenuItem(pathOfIds) {
    return { 
        type: actionTypes.ACTIVATE_MENU_ITEM,
        pathOfIds: pathOfIds
    };
};

export function clearActivityOfMenuItems() {
    return { 
        type: actionTypes.CLEAR_ACTIVITY_OF_MENU_ITEMS
    };
};

export function setUnmountComponentValues(val, path) {
    return { 
        type: actionTypes.SET_UNMOUNT_COMPONENT_VALUES,
        val: val,
        path: path
    };
};

export function unmountComponent() {
    return { 
        type: actionTypes.UNMOUNT_COMPONENT
    };
};

export function gotoNewPage() {
    return { 
        type: actionTypes.GO_TO_NEW_PAGE
    };
};

export function setMenuDotsState(val, page) {
    return { 
        type: actionTypes.SET_MENU_DOTS_STATE,
        val: val,
        page: page
    };
};

