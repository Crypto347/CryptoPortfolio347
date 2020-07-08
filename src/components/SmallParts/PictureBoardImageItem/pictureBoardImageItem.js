/**
* Libraries
*/

import React, {
    useState
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './pictureBoardImageItem.scss';

/**
* Utility
*/

import {
    H3,
    H4,
    H5,
    EH1,
    EW1,
    DoubleLine1
} from '../../UtilityComponents';

/**
* Images
*/

// import StoryImage1 from '../../../images/photo-1527358043728-909898958b29.jpg';
// import StoryImage2 from '../../../images/rocking-chairs-white-chairs-rockers.jpg';
// import StoryImage3 from '../../../images/coffee-latte-art-coffee-shop.jpg';
// import StoryImage4 from '../../../images/coffee-cup-latte-cappuccino.jpg';
// import StoryImage5 from '../../../images/coffee-cup-beverage-food-photo.jpg';
// import StoryImage6 from '../../../images/white-bowl-beside-glass-cup.jpg';
// import DefaultImage from '../../../images/error.jpg';

/**
* Cnstants
*/

// import * as Colors from '../../../constants/colors';

/**
* PictureBoardImageItem component definition and export
*/

export const PictureBoardImageItem = (props) => {

    /**
    * State
    */

    // const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    // const handleMouseEnter = () => {
    //     setIsHovering(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // }

    // const loadImage = (img) => {
    //     switch(img) {
    //         case 'image1':
    //             return StoryImage1;
    //         case 'image2':
    //             return StoryImage2;
    //         case 'image3':
    //             return StoryImage3;
    //         case 'image4':
    //             return StoryImage4;
    //         case 'image5':
    //             return StoryImage5;
    //         case 'image6':
    //             return StoryImage6;
    //         default:
    //             return DefaultImage;
    //     }
    // }

    // const onClick = (obj) => {
    //     props.history.push(`/crypto-cafe/${props.path}`,{obj, comment: true});
    // }

    /**
    * Markup
    */

    return(
        <div className="picture-board-image-item">
           
        </div>
    );
}

export default PictureBoardImageItem;
