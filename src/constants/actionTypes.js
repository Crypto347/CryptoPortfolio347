/**
* Genaral
*/

export const INIT_MENU_ITEMS = 'INIT_MENU_ITEMS';
export const INIT_MENU_FULLSCREEN_ITEMS = 'INIT_MENU_FULLSCREEN_ITEMS';
export const ACTIVATE_MENU_ITEM = 'ACTIVATE_MENU_ITEM';
export const PHOTO_VIEWER_OPEN = 'PHOTO_VIEWER_OPEN';
export const PREV_IMAGE = 'PREV_IMAGE';
export const NEXT_IMAGE = 'NEXT_IMAGE';
export const SET_SWIPER_STATE = 'SET_SWIPER_STATE';
export const SET_IS_HOVERING_MENU_ITEM = 'SET_IS_HOVERING_MENU_ITEM';
export const SET_IS_HOVERING_TOOLBAR_OPTION_ITEM = 'SET_IS_HOVERING_TOOLBAR_OPTION_ITEM';
export const SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM = 'SET_IS_HOVERING_TOOLBAR_SUB_OPTION_ITEM';
export const SET_IS_HOVERING_MENU_FULLSCREEN_ITEM = 'SET_IS_HOVERING_MENU_FULLSCREEN_ITEM';
export const SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM = 'SET_ACTIVITY_OF_TOOLBAR_OPTION_ITEM';
export const SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM = 'SET_ACTIVITY_OF_TOOLBAR_SUB_OPTION_ITEM';
export const SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM = 'SET_ACTIVITY_OF_MENU_FULLSCREEN_ITEM';
export const SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM = 'SET_IS_HOVERING_MENU_FULLSCREEN_OPTION_ITEM';
export const SET_SIDEBAR_STATE = 'SET_SIDEBAR_STATE';
export const CLEAR_ACTIVITY_OF_MENU_ITEMS = 'CLEAR_ACTIVITY_OF_MENU_ITEMS';
export const REMEMBER_COORDINATE_RANGE_FOR_PICTURE_BOARD = 'REMEMBER_COORDINATE_RANGE_FOR_PICTURE_BOARD';
export const FORGET_COORDINATE_RANGE_FOR_PICTURE_BOARD = 'FORGET_COORDINATE_RANGE_FOR_PICTURE_BOARD';
export const REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE = 'REMEMBER_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE';
export const FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE = 'FORGET_COORDINATE_RANGE_FOR_PORTFOLIO_GALLERY_PAGE';
export const REMEMBER_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE = 'REMEMBER_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE';
export const FORGET_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE = 'FORGET_COORDINATE_RANGE_FOR_SWITCH_IMAGE_PAGE';
export const SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_CATEGORY = 'SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_CATEGORY';
// export const SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_ARROW = 'SET_PORTFOLIO_GALLERY_PAGE_IS_HOVERING_ARROW';
export const SET_SWITCH_IMAGE_PAGE_IS_HOVERING_CATEGORY = 'SET_SWITCH_IMAGE_PAGE_IS_HOVERING_CATEGORY';
// export const SET_SWITCH_IMAGE_PAGE_IS_HOVERING_ARROW = 'SET_SWITCH_IMAGE_PAGE_IS_HOVERING_ARROW';
export const SET_SLIDE_FROM_IMAGE_LEFT_PAGE_IS_HOVERING_CATEGORY = "SET_SLIDE_FROM_IMAGE_LEFT_PAGE_IS_HOVERING_CATEGORY";
export const SET_HISTORY_POP_FROM_PORTFOLIO_ITEM = 'SET_HISTORY_POP_FROM_PORTFOLIO_ITEM';
export const SET_UNMOUNT_COMPONENT_VALUES = 'SET_UNMOUNT_COMPONENT_VALUES';
export const SET_MENU_DOTS_STATE = 'SET_MENU_DOTS_STATE';
export const SET_ARCHIVE_IS_HOVERING_IMAGE = 'SET_ARCHIVE_IS_HOVERING_IMAGE';
export const SET_ARCHIVE_IS_HOVERING_CATEGORY = 'SET_ARCHIVE_IS_HOVERING_CATEGORY';
export const SET_ARCHIVE_CATEGORY = "SET_ARCHIVE_CATEGORY"
export const LOAD_MORE_DISABLE_BUTTON_STATE = 'LOAD_MORE_DISABLE_BUTTON_STATE';
export const CLEAR_ARCHIVE_DATA = 'CLEAR_ARCHIVE_DATA';

/**
* Fetch from server
*/

export const FETCH_HEADER_IMAGES_BEGIN = 'FETCH_HEADER_IMAGES_BEGIN';
export const FETCH_HEADER_IMAGES_SUCCESS = 'FETCH_HEADER_IMAGES_SUCCESS';
export const FETCH_HEADER_IMAGES_FAILURE = 'FETCH_HEADER_IMAGES_FAILURE';
export const FETCH_SECTION_1_BEGIN = 'FETCH_SECTION_1_BEGIN';
export const FETCH_SECTION_1_SUCCESS = 'FETCH_SECTION_1_SUCCESS';
export const FETCH_SECTION_1_FAILURE = 'FETCH_SECTION_1_FAILURE';
export const FETCH_PICTURE_BOARD_BEGIN = 'FETCH_PICTURE_BOARD_BEGIN';
export const FETCH_PICTURE_BOARD_SUCCESS = 'FETCH_PICTURE_BOARD_SUCCESS';
export const FETCH_PICTURE_BOARD_FAILURE = 'FETCH_PICTURE_BOARD_FAILURE';
export const FETCH_OUR_PROCESS_DATA_BEGIN = 'FETCH_OUR_PROCESS_DATA_BEGIN';
export const FETCH_OUR_PROCESS_DATA_SUCCESS = 'FETCH_OUR_PROCESS_DATA_SUCCESS';
export const FETCH_OUR_PROCESS_DATA_FAILURE = 'FETCH_OUR_PROCESS_DATA_FAILURE';
export const FETCH_TESTIMONIALS_BEGIN = 'FETCH_TESTIMONIALS_BEGIN';
export const FETCH_TESTIMONIALS_SUCCESS = 'FETCH_TESTIMONIALS_SUCCESS';
export const FETCH_TESTIMONIALS_FAILURE = 'FETCH_TESTIMONIALS_FAILURE';
export const FETCH_TEAM_INFORMATION_BEGIN = 'FETCH_TEAM_INFORMATION_BEGIN';
export const FETCH_TEAM_INFORMATION_SUCCESS = 'FETCH_TEAM_INFORMATION_SUCCESS';
export const FETCH_TEAM_INFORMATION_FAILURE = 'FETCH_TEAM_INFORMATION_FAILURE';
export const FETCH_STATISTICS_DATA_BEGIN = 'FETCH_STATISTICS_DATA_BEGIN';
export const FETCH_STATISTICS_DATA_SUCCESS = 'FETCH_STATISTICS_DATA_SUCCESS';
export const FETCH_STATISTICS_DATA_FAILURE = 'FETCH_STATISTICS_DATA_FAILURE';
export const FETCH_ACHIEVEMENTS_DATA_BEGIN = 'FETCH_ACHIEVEMENTS_DATA_BEGIN';
export const FETCH_ACHIEVEMENTS_DATA_SUCCESS = 'FETCH_ACHIEVEMENTS_DATA_SUCCESS';
export const FETCH_ACHIEVEMENTS_DATA_FAILURE = 'FETCH_ACHIEVEMENTS_DATA_FAILURE';
export const FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN = 'FETCH_SMALL_IMAGES_PORTFOLIO_BEGIN';
export const FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS = 'FETCH_SMALL_IMAGES_PORTFOLIO_SUCCESS';
export const FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE = 'FETCH_SMALL_IMAGES_PORTFOLIO_FAILURE';
export const FETCH_BIG_SLIDER_PORTFOLIO_BEGIN = 'FETCH_BIG_SLIDER_PORTFOLIO_BEGIN';
export const FETCH_BIG_SLIDER_PORTFOLIO_SUCCESS = 'FETCH_BIG_SLIDER_PORTFOLIO_SUCCESS';
export const FETCH_BIG_SLIDER_PORTFOLIO_FAILURE = 'FETCH_BIG_SLIDER_PORTFOLIO_FAILURE';
export const FETCH_BIG_IMAGES_PORTFOLIO_BEGIN = 'FETCH_BIG_IMAGES_PORTFOLIO_BEGIN';
export const FETCH_BIG_IMAGES_PORTFOLIO_SUCCESS = 'FETCH_BIG_IMAGES_PORTFOLIO_SUCCESS';
export const FETCH_BIG_IMAGES_PORTFOLIO_FAILURE = 'FETCH_BIG_IMAGES_PORTFOLIO_FAILURE';
export const FETCH_SMALL_GALLERY_PORTFOLIO_BEGIN = 'FETCH_SMALL_GALLERY_PORTFOLIO_BEGIN';
export const FETCH_SMALL_GALLERY_PORTFOLIO_SUCCESS = 'FETCH_SMALL_GALLERY_PORTFOLIO_SUCCESS';
export const FETCH_SMALL_GALLERY_PORTFOLIO_FAILURE = 'FETCH_SMALL_GALLERY_PORTFOLIO_FAILURE';
export const FETCH_GALLERY_PORTFOLIO_BEGIN = 'FETCH_GALLERY_PORTFOLIO_BEGIN';
export const FETCH_GALLERY_PORTFOLIO_SUCCESS = 'FETCH_GALLERY_PORTFOLIO_SUCCESS';
export const FETCH_GALLERY_PORTFOLIO_FAILURE = 'FETCH_GALLERY_PORTFOLIO_FAILURE';
export const FETCH_SMALL_SLIDER_PORTFOLIO_BEGIN = 'FETCH_SMALL_SLIDER_PORTFOLIO_BEGIN';
export const FETCH_SMALL_SLIDER_PORTFOLIO_SUCCESS = 'FETCH_SMALL_SLIDER_PORTFOLIO_SUCCESS';
export const FETCH_SMALL_SLIDER_PORTFOLIO_FAILURE = 'FETCH_SMALL_SLIDER_PORTFOLIO_FAILURE';
export const FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN = 'FETCH_PORTFOLIO_GALLERY_PAGE_BEGIN';
export const FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS = 'FETCH_PORTFOLIO_GALLERY_PAGE_SUCCESS';
export const FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE = 'FETCH_PORTFOLIO_GALLERY_PAGE_FAILURE';
export const FETCH_ARCHIVE_BEGIN = 'FETCH_ARCHIVE_BEGIN';
export const FETCH_ARCHIVE_SUCCESS = 'FETCH_ARCHIVE_SUCCESS';
export const FETCH_ARCHIVE_FAILURE = 'FETCH_ARCHIVE_FAILURE';
export const LOAD_MORE_ARCHIVE_DATA_BEGIN = 'LOAD_MORE_ARCHIVE_DATA_BEGIN';
export const LOAD_MORE_ARCHIVE_DATA_SUCCESS = 'LOAD_MORE_ARCHIVE_DATA_SUCCESS';
export const LOAD_MORE_ARCHIVE_DATA_FAILURE = 'LOAD_MORE_ARCHIVE_DATA_FAILURE';
export const FETCH_SWITCH_IMAGE_PAGE_BEGIN = 'FETCH_SWITCH_IMAGE_PAGE_BEGIN';
export const FETCH_SWITCH_IMAGE_PAGE_SUCCESS = 'FETCH_SWITCH_IMAGE_PAGE_SUCCESS';
export const FETCH_SWITCH_IMAGE_PAGE_FAILURE = 'FETCH_SWITCH_IMAGE_PAGE_FAILURE';
export const FETCH_SIMPLE_OVERLAY_PAGE_BEGIN = 'FETCH_SIMPLE_OVERLAY_PAGE_BEGIN';
export const FETCH_SIMPLE_OVERLAY_PAGE_SUCCESS = 'FETCH_SIMPLE_OVERLAY_PAGE_SUCCESS';
export const FETCH_SIMPLE_OVERLAY_PAGE_FAILURE = 'FETCH_SIMPLE_OVERLAY_PAGE_FAILURE';
export const FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_BEGIN = 'FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_BEGIN';
export const FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_SUCCESS = 'FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_SUCCESS';
export const FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_FAILURE = 'FETCH_SLIDE_FROM_IMAGE_LEFT_PAGE_FAILURE';


export const SET_SMALL_IMAGES_IS_HOVERING_CATEGORY = 'SET_SMALL_IMAGES_IS_HOVERING_CATEGORY';
export const SET_SMALL_IMAGES_IS_HOVERING_TAG = 'SET_SMALL_IMAGES_IS_HOVERING_TAG';
export const SET_BIG_SLIDER_IS_HOVERING_CATEGORY = 'SET_BIG_SLIDER_IS_HOVERING_CATEGORY';
export const SET_BIG_SLIDER_IS_HOVERING_TAG = 'SET_BIG_SLIDER_IS_HOVERING_TAG';
export const SET_BIG_IMAGES_IS_HOVERING_CATEGORY = 'SET_BIG_IMAGES_IS_HOVERING_CATEGORY';
export const SET_BIG_IMAGES_IS_HOVERING_TAG = 'SET_BIG_IMAGES_IS_HOVERING_TAG';
export const SET_SMALL_SLIDER_IS_HOVERING_CATEGORY = 'SET_SMALL_SLIDER_IS_HOVERING_CATEGORY';
export const SET_SMALL_SLIDER_IS_HOVERING_TAG = 'SET_SMALL_SLIDER_IS_HOVERING_TAG';
export const SET_SMALL_GALLERY_IS_HOVERING_CATEGORY = 'SET_SMALL_GALLERY_IS_HOVERING_CATEGORY';
export const SET_SMALL_GALLERY_IS_HOVERING_TAG = 'SET_SMALL_GALLERY_IS_HOVERING_TAG';
export const SET_SMALL_GALLERY_IS_HOVERING_IMAGE = 'SET_SMALL_GALLERY_IS_HOVERING_IMAGE';
export const SET_GALLERY_IS_HOVERING_CATEGORY = 'SET_GALLERY_IS_HOVERING_CATEGORY';
export const SET_GALLERY_IS_HOVERING_TAG = 'SET_GALLERY_IS_HOVERING_TAG';
export const SET_GALLERY_IS_HOVERING_IMAGE = 'SET_GALLERY_IS_HOVERING_IMAGE';

/**
* Epics
*/

export const UNMOUNT_COMPONENT = 'UNMOUNT_COMPONENT';
export const GO_TO_NEW_PAGE = 'GO_TO_NEW_PAGE';

