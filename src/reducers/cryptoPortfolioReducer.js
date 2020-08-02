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
    menuItems: [],
    photoViewerForPictureBoardTextItemOpen: false,
    photoViewerImagesArray: [],
    swiper: {
        slides: [],
        _slides: [],
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        rerender: false
    }
}

const initMenuItems = (state, action) => {
    return {
        ...state,
        menuItems: action.array,
    };
}

const photoViewerOpen = (state, action) => {    
    switch(action.option){
        case 'pictureBoardForTextItem':
            return {
                ...state,
                photoViewerForPictureBoardTextItemOpen: action.val,
                photoViewerImagesArray: action.array
            };
        default:
            return state;
    }
}

const prevImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let lastImage = updatedPhotoViewerImagesArray[updatedPhotoViewerImagesArray.length - 1];
    updatedPhotoViewerImagesArray.pop();
    updatedPhotoViewerImagesArray.unshift(lastImage);

    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const nextImage = (state, action) => {
    let updatedPhotoViewerImagesArray = [...state.photoViewerImagesArray];
    let currentImage = updatedPhotoViewerImagesArray[0];
    updatedPhotoViewerImagesArray.shift();
    updatedPhotoViewerImagesArray.push(currentImage);
    return {
        ...state,
        photoViewerImagesArray: updatedPhotoViewerImagesArray,
    };
}

const setSwiperState = (state, action) => {
    let updatedSwiper = {
        slides: action.slides,
        _slides: action._slides,
        activeIndex: action.activeIndex,
        translate: action.translate,
        transition: action.transition,
        rerender: action.rerender
        
    };
    return {
        ...state,
        swiper: updatedSwiper,
    };
}

const setIsHoveringMenuItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    if(action.val){
        let toolbarItem = {...updatedMenuItems.find(item => item.id === action.id), isHover: action.val};
        let itemIndex = updatedMenuItems.findIndex(item => item.id === action.id);
        updatedMenuItems.splice(itemIndex, 1, toolbarItem);
    }else{
        updatedMenuItems = updatedMenuItems.map(el => {
            return{
                ...el,
                isHover: action.val
            }
        });

        updatedMenuItems.map((el, i) => {
            updatedMenuItems[i].options.map((el2, i2) => {
                updatedMenuItems[i].options[i2].array.map((el3, i3) => {
                    updatedMenuItems[i].options[i2].array[i3].isHover = "init";
                    updatedMenuItems[i].options[i2].array[i3].subOptions.map((el4, i4) => {
                        updatedMenuItems[i].options[i2].array[i3].subOptions[i4].isHover = "init";
                    })
                })
            })
        })
        // console.log(updatedMenuItems)
    }
    return {
        ...state,
        menuItems: updatedMenuItems,
    };
}


const setIsHoveringToolbarOptionItem = (state, action) => {
    let updatedMenuItems = [...state.menuItems];
    
    if(action.val === "on"){
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        
        updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);
    }else{
        let optionItem = {
            ...updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .find(item => item.id === action.pathOfIds[1]),
            isHover: action.val
        }

        let optionItemIndex = updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .findIndex(item => item.id === action.pathOfIds[1]);
            
        
        updatedMenuItems
            .find(item => item.isHover === true).options
            .find(item => item.id === action.pathOfIds[0]).array
            .splice(optionItemIndex, 1, optionItem);
    }
    return {
        ...state,
        menuItems: updatedMenuItems,
    };
}

// const setInputFiledValueAndCheckValidation = (state, action) => {
//     let updatedInputFieldObj = {...action.obj, inputsArray: [...action.obj.inputsArray]};
//     let inputField = updatedInputFieldObj.inputsArray.find(x => x.id === action.inputFieldId);
//     let inputFieldIndex = updatedInputFieldObj.inputsArray.findIndex(x => x.id === action.inputFieldId);
//     inputField = {
//         ...inputField, 
//         value: action.event.target.value,
//         validation: Utility.checkValidity(action.event.target.value, inputField.validation),
//         touched: true
//     };

//     inputField = {
//         ...inputField, 
//         errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
//         validField: Utility.checkValidityOfField(inputField.validation),
//     }
   
//     updatedInputFieldObj.inputsArray.splice(inputFieldIndex, 1, inputField)

//     let checkIfFormIsValid = updatedInputFieldObj.inputsArray.map(el => el.validField === true);
//     updatedInputFieldObj = {...updatedInputFieldObj, formIsValid: checkIfFormIsValid.every(x => x === true)};

//     switch(action.formName) {
//         case 'leaveACommentInputForm':
//             return {
//                 ...state,
//                 leaveACommentInputForm: updatedInputFieldObj
//             };
//         case 'getInTouchInputForm':
//             return {
//                 ...state,
//                 getInTouchInputForm: updatedInputFieldObj
//             };
//     }
// }


// const postComment = (state, action) => {
//     let updatedSingleStory = {...state.singleStory};
//     let updatedLeaveACommentInputForm = {...state.leaveACommentInputForm, inputsArray: [...state.leaveACommentInputForm.inputsArray]};
//     if(state.leaveACommentInputForm.formIsValid && state.leaveACommentInputForm.inputsArray){
//         let comment = {
//             id: uuid(),
//             image: "Name1",
//             fullName: `${state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "firstName").value}`,
//             date: Utility.getCurrentDateAndTime(),
//             comment: state.leaveACommentInputForm.inputsArray.find(x => x.controlName === "comment").value,
//         }
//         updatedSingleStory.comments.push(comment);
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
//         updatedLeaveACommentInputForm.formIsValid = false;
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
//     }else{
//         updatedLeaveACommentInputForm.inputsArray = updatedLeaveACommentInputForm.inputsArray.map((el, i) => {
//             return {
//                     ...el, 
//                     touched: true,
//                     errorMessage: ["Fill the field"]
//                 }
                
//         })
//         // console.log(updatedLeaveACommentInputForm)
//     }
    
//     return {
//         ...state,
//         singleStory: updatedSingleStory,
//         leaveACommentInputForm: updatedLeaveACommentInputForm
//     }; 
// }

// const sendComment = (state, action) => {
//     let updatedCustomerMessages = [...state.customerMessages];
//     let updatedGetInTouchInputForm = {...state.getInTouchInputForm, inputsArray: [...state.getInTouchInputForm.inputsArray]};
//     if(state.getInTouchInputForm.formIsValid && state.getInTouchInputForm.inputsArray){
//         let message = {
//             id: uuid(),
//             name: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "name").value}`,
//             email: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "email").value}`,
//             phone: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "phoneNumber").value}`,
//             location: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "location").value}`,
//             partyOf2: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "partyOf2").value}`,
//             date: `${state.getInTouchInputForm.inputsArray.find(x => x.controlName === "date").value}`,
//             specialNote: state.getInTouchInputForm.inputsArray.find(x => x.controlName === "specialNote").value,
//         }
//         updatedCustomerMessages.push(message);
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: ''}});
        
//         updatedGetInTouchInputForm.formIsValid = false;
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map(el => {return {...el, value: '', validField: false, touched: false}});
//     }else{
//         updatedGetInTouchInputForm.inputsArray = updatedGetInTouchInputForm.inputsArray.map((el, i) => {
//             return {
//                     ...el, 
//                     touched: true,
//                     errorMessage: ["Fill the field"]
//                 }
                
//         })
//         // console.log(updatedLeaveACommentInputForm)
//     }
    
//     return {
//         ...state,
//         customerMessages: updatedCustomerMessages,
//         getInTouchInputForms: updatedGetInTouchInputForm
//     }; 
// }






const cryptoPortfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INIT_MENU_ITEMS:
            return initMenuItems(state, action); 
        case actionTypes.PHOTO_VIEWER_OPEN:
            return photoViewerOpen(state, action); 
        case actionTypes.PREV_IMAGE:
            return prevImage(state, action); 
        case actionTypes.NEXT_IMAGE:
            return nextImage(state, action); 
        case actionTypes.SET_SWIPER_STATE:
            return setSwiperState(state, action); 
        case actionTypes.SET_IS_HOVERING_MENU_ITEM:
            return setIsHoveringMenuItem(state, action); 
        case actionTypes.SET_IS_HOVERING_TOOLBAR_OPTION_ITEM:
            return setIsHoveringToolbarOptionItem(state, action); 
        default: 
            return state;
    }
}

export default cryptoPortfolioReducer;
