import { 
    createSelector 
} from 'reselect';

const getMenuItems = (state) => state.home.menuItems;

export const getMenuItemsState = createSelector(
    [getMenuItems],
    (x) => x
);

const getHeaderImages = (state) => state.headerImages;

export const getHeaderImagesState = createSelector(
    [getHeaderImages],
    (x) => x
);

const getSection1Date = (state) => state.section1;

export const getSection1DateState = createSelector(
    [getSection1Date],
    (x) => x
);

const getPictureBoardItems = (state) => state.section2.pictureBoard;

export const getPictureBoardItemsState = createSelector(
    [getPictureBoardItems],
    (x) => x
);

const getOurProcessData = (state) => state.section2.ourProcess;

export const getOurProcessDataState = createSelector(
    [getOurProcessData],
    (x) => x
);

const getPhotoViewerForPictureBoardTextItemOpen = (state) => state.home.photoViewerForPictureBoardTextItemOpen;

export const getPhotoViewerForPictureBoardTextItemOpenState = createSelector(
    [getPhotoViewerForPictureBoardTextItemOpen],
    (x) => x
);

const getPhotoViewerImagesArray = (state) => state.home.photoViewerImagesArray;

export const getPhotoViewerImagesArrayState = createSelector(
    [getPhotoViewerImagesArray],
    (x) => x
);

const getTestimonials = (state) => state.section3.testimonials;

export const getTestimonialsState = createSelector(
    [getTestimonials],
    (x) => x
);

const getSwiperData = (state) => state.home.swiper;

export const getSwiperDataState = createSelector(
    [getSwiperData],
    (x) => x
);

const getTeamInformation = (state) => state.section3.teamInformation;

export const getTeamInformationState = createSelector(
    [getTeamInformation],
    (x) => x
);

const getStatisticsData = (state) => state.section4.statisticsData;

export const getStatisticsDataState = createSelector(
    [getStatisticsData],
    (x) => x
);

const getAchievementsData = (state) => state.section4.achievementsData;

export const getAchievementsDataState = createSelector(
    [getAchievementsData],
    (x) => x
);

const getSidebarState = (state) => state.home.sidebarState;

export const getSidebarStateState = createSelector(
    [getSidebarState],
    (x) => x
);

const getSmallImagesPortfolio = (state) => state.smallImagesPortfolio;

export const getSmallImagesPortfolioState = createSelector(
    [getSmallImagesPortfolio],
    (x) => x
);

const getPictureBoardImagesCooradinateRange = (state) => state.section2.pictureBoardImagesCooradinateRange;

export const getPictureBoardImagesCooradinateRangeState = createSelector(
    [getPictureBoardImagesCooradinateRange],
    (x) => x
);

const getBigSliderPortfolio = (state) => state.bigSliderPortfolio;

export const getBigSliderPortfolioState = createSelector(
    [getBigSliderPortfolio],
    (x) => x
);

const getPhotoViewerForBigSliderOpen = (state) => state.home.photoViewerForBigSliderOpen;

export const getPhotoViewerForBigSliderOpenState = createSelector(
    [getPhotoViewerForBigSliderOpen],
    (x) => x
);

const getBigImagesPortfolio = (state) => state.bigImagesPortfolio;

export const getBigImagesPortfolioState = createSelector(
    [getBigImagesPortfolio],
    (x) => x
);

const getPhotoViewerForSmallImagesOpen = (state) => state.home.photoViewerForSmallImagesOpen;

export const getPhotoViewerForSmallImagesOpenState = createSelector(
    [getPhotoViewerForSmallImagesOpen],
    (x) => x
);

const getPhotoViewerForBigImagesOpen = (state) => state.home.photoViewerForBigImagesOpen;

export const getPhotoViewerForBigImagesOpenState = createSelector(
    [getPhotoViewerForBigImagesOpen],
    (x) => x
);
