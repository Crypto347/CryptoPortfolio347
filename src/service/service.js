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
                console.log(json)
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
                console.log(json)
                dispatch(Actions.fetchPictureBoardSuccess(json));
                // return json;
            })
            .catch(error => {
                console.log("error",error)
                dispatch(Actions.fetchPictureBoardFailur(error))
            });
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
