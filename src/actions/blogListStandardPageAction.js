import * as actionTypes from '../constants/actionTypes';

export function fetchBlogListStandardPageDataBegin() {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN
    };
};

export function fetchBlogListStandardPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchBlogListStandardPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE,
        err: err
    };
};

export function fetchPostBlogDataBegin() {
    return { 
        type: actionTypes.FETCH_POST_BLOG_DATA_BEGIN
    };
};

export function fetchPostBlogDataSuccess(obj) {
    return { 
        type: actionTypes.FETCH_POST_BLOG_DATA_SUCCESS,
        obj: obj
    };
};

export function fetchPostBlogDataFailur(err) {
    return { 
        type: actionTypes.FETCH_POST_BLOG_DATA_FAILURE,
        err: err
    };
};

export function fetchBlogNavigationForBlogListStandardPageDataBegin() {
    return { 
        type: actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN
    };
};

export function fetchBlogNavigationForBlogListStandardPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchBlogNavigationForBlogListStandardPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_BLOG_NAVIGATION_FOR_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE,
        err: err
    };
};

export function initSearchInputFormForBlogListStandardPage(obj) {
    return { 
        type: actionTypes.INIT_SEARCH_INPUT_FORM_FOR_BLOG_LIST_STANDARD_PAGE,
        obj: obj
    };
};

export function activateListStandardBlogCategory(categoryIsActive, categoryName) {
    return { 
        type: actionTypes.ACTIVATE_LIST_STANDARD_BLOG_CATEGORY,
        categoryIsActive: categoryIsActive,
        categoryName: categoryName
    };
};

export function initCategoriesForBlogListStandardPage(array) {
    return { 
        type: actionTypes.INIT_CATEGORIES_FOR_BLOG_LISTS_STANDARD_PAGE,
        array: array
    };
};

export function initTagsForBlogListStandardPage(array) {
    return { 
        type: actionTypes.INIT_TAGS_FOR_BLOG_LISTS_STANDARD_PAGE,
        array: array
    };
};

export function blogListCardCategoryIsHoverForBlogListStandardPage(val, cardKey, categoryKey) {
    return { 
        type: actionTypes.BLOG_LIST_CARD_CATEGORY_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE,
        val: val,
        cardKey: cardKey,
        categoryKey: categoryKey
    };
};

export function blogPostSingleItemCategoryIsHoverForBlogListStandardPage(val, categoryKey) {
    return { 
        type: actionTypes.BLOG_POST_SINGLE_ITEM_CATEGORY_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE,
        val: val,
        categoryKey: categoryKey
    };
};

export function setSwiperStateForBlogListStandardPage(slides, _slides, activeIndex, translate, transition, rerender, cardKey) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_BLOG_LIST_STANDARD_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender,
        cardKey: cardKey
    };
};

export function setSwiperStateOfBlogPostSingleItemForBlogListStandardPage(slides, _slides, activeIndex, translate, transition, rerender) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_OF_BLOG_POST_SINGLE_ITEM_FOR_BLOG_LIST_STANDARD_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender
    };
};

export function initBlogPagination(numOfPages) {
    return { 
        type: actionTypes.INIT_BLOG_PAGINATION,
        numOfPages: numOfPages
    };
};

export function activatePageNumberForBlogListStandardPage(activePageId) {
    return { 
        type: actionTypes.ACTIVATE_PAGE_NUMBER_FOR_BLOG_LIST_STANDARD_PAGE,
        activePageId: activePageId
    };
};

export function activateListStandardBlogItem(itemIsActive, itemKey) {
    return { 
        type: actionTypes.ACTIVATE_LIST_STANDARD_BLOG_ITEM,
        itemIsActive: itemIsActive,
        itemKey: itemKey
    };
};

export function clearBlogListSingleItemStateForBlogListStandardPage () {
    return { 
        type: actionTypes.CLEAR_BLOG_LIST_SINGLE_ITEM_STATE_FOR_BLOG_LIST_STANDARD_PAGE
    };
};

export function triggerCommentReplyButtonForBlogListStandardPage () {
    return { 
        type: actionTypes.TRIGGER_COMMENT_REPLY_BUTTON_FOR_BLOG_LIST_STANDARD_PAGE
    };
};

export function initInputFormOfBlogCommentReplyForBlogListStandardPage (obj) {
    return { 
        type: actionTypes.INIT_INPUT_FORM_OF_BLOG_COMMENT_REPLY_FOR_BLOG_LIST_STANDARD_PAGE,
        obj: obj
    };
};

export function setInputFiledValueAndCheckValidationForBlogListStandardPage(obj, e, id, formName) {
    return { 
        type: actionTypes.SET_INPUT_FIELD_VALUE_AND_CHECK_VALIDATION_FOR_BLOG_LIST_STANDARD_PAGE,
        obj: obj,
        event: e,
        inputFieldId: id,
        formName: formName
    };
};

export function replyCommentBlogListStandardPage() {
    return { 
        type: actionTypes.REPLY_COMMENT_BLOG_LIST_STANDARD_PAGE
    };
};

export function increaseTheNumberOfLikesForBlogListStandardPage(cardKey) {
    return { 
        type: actionTypes.INCREASE_THE_NUMBER_OF_LIKES_FOR_BLOG_LIST_STANDARD_PAGE,
        cardKey: cardKey
    };
};

export function decreaseTheNumberOfLikesForBlogListStandardPage(cardKey) {
    return { 
        type: actionTypes.DECREASE_THE_NUMBER_OF_LIKES_FOR_BLOG_LIST_STANDARD_PAGE,
        cardKey: cardKey
    };
};

