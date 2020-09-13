/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

/**
* Styles
*/

import './stoneWallItem.scss';

/**
* Utility
*/

import * as Utility from '../../../utility';

import { 
    H17,
    H35,
    H45,
    H70,
    EH10,
    EH20,
    EH40,
    EH70,
    EH110
} from '../../UtilityComponents';

/**
* Images
*/

import * as Images from '../../../constants/images';

/**
* StoneWallItem component definition and export
*/

export const StoneWallItem = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);
    const [paddingLeftRight, setPaddingLeftRight] = useState(0);
 
    /**
    * Methods
    */

    useEffect(() => {   
        const resize = () => {
            resizeRef.current();
        } 
        window.addEventListener('resize', resize);
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    })

    const handleResize = () => {
        let paddingLeftRightVal = setPadding(props.page);
        let cardHeight = document.getElementById("img").clientHeight;
        setCardHeight(cardHeight - paddingLeftRightVal);
        setPaddingLeftRight(paddingLeftRightVal);
    }

    const setPadding = (page) => {
        switch(page){
            case 'overlayPage':
                return 80;
            case 'overlayWithInfoPage':
            case 'stoneWallPage':
            case 'galleryWithSpacePage':
                return 40;
        }
    }

    const handleMouseEnter = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("on");
                handleResize();
            break;
            case 'overlayWithInfoCategory': 
                props.setIsHoveringCategory("on", pathOfIds);
            break;
        }
    }

    const handleMouseLeave = (opt, id, pathOfIds) => {
        switch(opt){
            case 'curtain': 
                setIsHovering("off");
                break;
            case 'overlayWithInfoCategory': 
                props.setIsHoveringCategory("off", pathOfIds);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'stoneWallCover1':
                return Images.STONE_WALL_PAGE_COVER_PIC_1;
            case 'stoneWallCover2':
                return Images.STONE_WALL_PAGE_COVER_PIC_2;
            case 'stoneWallCover3':
                return Images.STONE_WALL_PAGE_COVER_PIC_3;
            case 'stoneWallCover4':
                return Images.STONE_WALL_PAGE_COVER_PIC_4;
            case 'stoneWallCover5':
                return Images.STONE_WALL_PAGE_COVER_PIC_5;
            default:
                return "";
        }
    }

    const simpleOverlayImageOnClick = (path) => {
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, props.page);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "curtain"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "overlay-curtain-hover-on";
                case 'off':
                    return "overlay-curtain-hover-off"
            }
        }
        if(opt === "overlayImage"){
            switch(isHovering){
                case 'init':
                    return "overlay-image";
                case 'on':
                    return "overlay-image-hover-on";
                case 'off':
                    return "overlay-image-hover-off"
            }
        }
        if(opt === "overlayWithInfoCategory"){
            switch(isHovering){
                case 'init':
                    return "h17-white-lustria-animated";
                case 'on':
                    return "h17-white-lustria-nobel-hover-on";
                case 'off':
                    return "h17-nobel-lustria-nobel-hover-off"
            }
        }
        if(opt === "header"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "h35-white-poppins-animated-opacity-hover-on";
                case 'off':
                    return "h35-white-poppins-animated-opacity-hover-off"
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "display-none";
                case 'on':
                    return "overlay-image-arrow-wrapper-lengthen";
                case 'off':
                    return "overlay-image-arrow-wrapper-shorten"
            }
        }
    }

    const onClickHandler = (e, path) => {
        e.stopPropagation();
        props.setUnmountComponentValues(true, path);
        props.unmountComponent(null, null, props.page);
        props.clearArchiveData();
    }

    const renderCategories = (obj) => {
        return(
            <div className="overlay-with-info-categories">{obj.categories.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                return(
                    <div 
                        key={i}
                        className="overlay-with-info-category"
                        onClick={(e) => onClickHandler(e, el.path)}
                        onMouseEnter={() => handleMouseEnter(`overlayWithInfoCategory`, null, pathOfIds)} 
                        onMouseLeave={() => handleMouseLeave(`overlayWithInfoCategory`, null, pathOfIds)} 
                    >
                        <H17 className={renderClassName("overlayWithInfoCategory", el.isHover)}>{el.label}</H17>
                        {i !== obj.categories.length-1 ? <div className="overlay-with-info-category-slash">/</div> : null}
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="overlay-image"
            onMouseEnter={() => handleMouseEnter("curtain", null, isHovering)} 
            onMouseLeave={() => handleMouseLeave("curtain", null, isHovering)}
            style={{marginBottom: `${props.page === "galleryPage" ? 0 : 30}px`}}
        >
            <div className={renderClassName("overlayImage", isHovering)}>
                <img 
                    id="img"
                    src={loadImg(props.obj.coverImage.key)} 
                    alt={props.obj.coverImage.alt}
                />
            </div>
            <div 
                className={renderClassName("curtain", isHovering)}
                style={{height: `${cardHeight}px`, padding: `${paddingLeftRight/2} 20px ${paddingLeftRight/2} 20px`}}
                onClick={() => simpleOverlayImageOnClick(props.obj.path)}
            >
                {props.page === "overlayWithInfoPage" ? 
                <>
                    {renderCategories(props.obj)}
                    <EH10/>
                    <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                    <EH20/>
                </> : null}
                {props.page === "stoneWallPage" || props.page === "galleryWithSpacePage" ? 
                <>
                    <H35 className={renderClassName("header", isHovering)}>{props.obj.header}</H35>
                    <EH20/>
                </> : null}
               <div className={renderClassName("arrow", isHovering)}>
                    <div className="arrow-horizontal-line"/>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoneWallItem;
