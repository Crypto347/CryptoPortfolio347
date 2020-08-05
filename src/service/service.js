/**
* Actions
*/

import * as Actions from "../actions";

/**
* Utility
*/

// import * as Utility from "../utility";

export function fetchHeaderImagesArray() {
    return dispatch => {
        dispatch(Actions.fetchHeaderImagesBegin());
        return fetch("http://localhost:3005/api/headerImagesArray")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json);
                dispatch(Actions.fetchHeaderImagesSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error);
                dispatch(Actions.fetchHeaderImagesFailur(error))
            });
    };
}

export function fetchSection1Data() {
    return dispatch => {
        dispatch(Actions.fetchSection1DataBegin());
        return fetch("http://localhost:3005/api/section1")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchSection1DataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchSection1DataFailur(error))
            });
    };
}

export function fetchPictureBoard() {
    return dispatch => {
        dispatch(Actions.fetchPictureBoardBegin());
        return fetch("http://localhost:3005/api/section2/pictureBoard")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchPictureBoardSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPictureBoardFailur(error))
            });
    };
}

export function fetchOurProcessData() {
    return dispatch => {
        dispatch(Actions.fetchOurProcessDataBegin());
        return fetch("http://localhost:3005/api/section2/ourProcess")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchOurProcessDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchOurProcessDataFailur(error))
            });
    };
}

export function fetchTestimonials() {
    return dispatch => {
        dispatch(Actions.fetchTestimonialsBegin());
        return fetch("http://localhost:3005/api/section3/testimonials")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTestimonialsSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTestimonialsFailur(error))
            });
    };
}

export function fetchTeamInformation() {
    return dispatch => {
        dispatch(Actions.fetchTeamInformationBegin());
        return fetch("http://localhost:3005/api/section3/teamInformation")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchTeamInformationSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchTeamInformationFailur(error))
            });
    };
}

export function fetchStatisticsData() {
    return dispatch => {
        dispatch(Actions.fetchStatisticsDataBegin());
        return fetch("http://localhost:3005/api/section4/statisticsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchStatisticsDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchStatisticsDataFailur(error))
            });
    };
}

export function fetchAchievementsData() {
    return dispatch => {
        dispatch(Actions.fetchAchievementsDataBegin());
        return fetch("http://localhost:3005/api/section4/achievementsData")
            // .then(handleErrors)
            .then(res => res.json()) // to debug instead of json write text
            .then(json => {
                // console.log(json)
                dispatch(Actions.fetchAchievementsDataSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchAchievementsDataFailur(error))
            });
    };
}

// export function fetchAchievementsData() {
//     return dispatch => {
//         dispatch(Actions.fetchAchievementsDataBegin());
//         return fetch("http://localhost:3005/api/portfolio-item/1", )
//             // .then(handleErrors)
//             .then(res => res.json()) // to debug instead of json write text
//             .then(json => {
//                 // console.log(json)
//                 dispatch(Actions.fetchAchievementsDataSuccess(json));
//                 // return json;
//             })
//             .catch(error => {
//                 console.log("error",error)
//                 dispatch(Actions.fetchAchievementsDataFailur(error))
//             });
//     };
// }

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
