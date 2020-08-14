/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './pictureBoard.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';
import PictureBoardTextItem from '../../SmallParts/PictureBoardTextItem/pictureBoardTextItem';
import PictureBoardImageItem from '../../SmallParts/PictureBoardImageItem/pictureBoardImageItem';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
   H19
} from '../../UtilityComponents';

/**
* PictureBoard component definition and export
*/

export const PictureBoard = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        
    }, [])

    const renderPictureBoard = () => {
        if(props.pictureBoard.loading && !props.pictureBoard.error){
            return(
                <div className="picture-board-loading-error">
                    <Loading color="white"/>
                </div>
            )
        }
        if(!props.pictureBoard.loading && !props.pictureBoard.error){
            return(
                <>
                    {renderPictureBoardItems()}
                </>
            )
        }
        if(!props.pictureBoard.loading && props.pictureBoard.error){
            return(
                <div className="picture-board-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.pictureBoard.error}`}</H19>
                </div>
            )
        }
    } 

    const renderPictureBoardItems = () => {
        return(
            <div className="picture-board-items">{props.pictureBoard.items.map((el,i) => {
                if(el.option === "text"){
                    return(
                        <PictureBoardTextItem 
                            key={i}
                            id={el.id}
                            option={el.option}
                            header={el.header}
                            text={el.text}
                            imagesArray={el.pictures}
                        />
                    )
                }else{
                    let imgCoordinateRange = props.pictureBoardImagesCooradinateRange.find(item => item.id === el.id);
                    // console.log(imgCoordinateRange)
                    return(
                        <PictureBoardImageItem  
                            key={i}
                            id={el.id}
                            option={el.option}
                            imagesArray={el.pictures}
                            alt={el.alt}
                            path={el.path}
                            clearActivityOfMenuItems={props.clearActivityOfMenuItems}
                            rememberCoordinateRange={props.rememberCoordinateRange}
                            imgCoordinateRange={imgCoordinateRange}
                        />
                    )
                }
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="picture-board" id="pictureBoard">
            {renderPictureBoard()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            pictureBoard: Selectors.getPictureBoardItemsState(state),
            pictureBoardImagesCooradinateRange: Selectors.getPictureBoardImagesCooradinateRangeState(state),
        };
    },
    (dispatch) => {
        return {
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            rememberCoordinateRange: bindActionCreators(Actions.rememberCoordinateRange, dispatch)
        };
    }
)(PictureBoard);
 