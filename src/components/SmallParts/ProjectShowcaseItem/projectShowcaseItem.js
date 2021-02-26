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

import './projectShowcaseItem.scss';

/**
 * Utility
 */

import {
    H19,
    H22,
    H65,
    EH10,
    EH20,
    EH30
} from '../../UtilityComponents';

/**
 * Images
 */

import * as Images from '../../../constants/images';

/**
 * ProjectShowcaseItem component definition and export
 */

export const ProjectShowcaseItem = (props) => {

    /**
     * State
     */

    const resizeRef = useRef();
    const [isHovering, setIsHovering] = useState("init");
    const [cardHeight, setCardHeight] = useState(0);
 
    /**
     * Methods
     */

    useEffect(() => {
        // Event Listeners

        const resize = () => {
            resizeRef.current();
        }

        window.addEventListener('resize', resize);

        // Cleaning the unmounted component
        return () =>  window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        // Set the height of the curtain on window resize

        let obj = {
            img1: {
                // width: document.getElementById("stoneWallItemId1").clientWidth,
                height: document.getElementById("stoneWallItemId1").clientHeight,
            }, 
            img2: {
                // width: document.getElementById("stoneWallItemId2").clientWidth,
                height: document.getElementById("stoneWallItemId2").clientHeight,
            }, 
            img3: {
                // width: document.getElementById("stoneWallItemId3").clientWidth,
                height: document.getElementById("stoneWallItemId3").clientHeight,
            },
            img4: {
                // width: document.getElementById("stoneWallItemId4").clientWidth,
                height: document.getElementById("stoneWallItemId4").clientHeight,
            },
            img5: {
                // width: document.getElementById("stoneWallItemId5").clientWidth,
                height: document.getElementById("stoneWallItemId5").clientHeight,
            }
        }
        
        switch(props.obj.id){
            case 1:
                setCardHeight(obj.img1.height - 40);
                break;
            case 2:
                setCardHeight(obj.img2.height - 40);
                break;
            case 3:
                setCardHeight(obj.img3.height - 40);
                break;
            case 4:
                setCardHeight(obj.img4.height - 40);
                break;
            case 5:
                setCardHeight(obj.img5.height - 40);
                break;
        }
    }

    const handleMouseEnter = (opt, key, id) => {
        switch(opt){
            case 'projectShowcaseCategory': 
                props.setProjectShowcaseIsHoveringCategory("on", key, id);
                break;
            case 'projectShowcaseTag': 
                props.setProjectShowcaseIsHoveringTag("on", key, id);
                break;
        }
    }

    const handleMouseLeave = (opt, key, id) => {
        switch(opt){
            case 'projectShowcaseCategory': 
                props.setProjectShowcaseIsHoveringCategory("off", key, id);
                break;
            case 'projectShowcaseTag': 
                props.setProjectShowcaseIsHoveringTag("off", key, id);
                break;
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'portfolioProjectShowcasePageId1Img1':
                return Images.ID_2_BIG_IMAGES_5;
            case 'portfolioProjectShowcasePageId1Img2':
                return Images.ID_2_BIG_IMAGES_4;
            case 'portfolioProjectShowcasePageId1Img3':
                return Images.ID_2_BIG_IMAGES_3;
            case 'portfolioProjectShowcasePageId2Img1':
                return Images.ID_3_GALLERY_1;
            case 'portfolioProjectShowcasePageId2Img2':
                return Images.ID_3_GALLERY_3;
            case 'portfolioProjectShowcasePageId2Img3':
                return Images.ID_3_GALLERY_4;
            case 'portfolioProjectShowcasePageId3Img1':
                return Images.ID_1_SMALL_SLIDER_2;
            case 'portfolioProjectShowcasePageId3Img2':
                return Images.ID_1_SMALL_SLIDER_5;
            case 'portfolioProjectShowcasePageId3Img3':
                return Images.ID_1_SMALL_SLIDER_1;
            default:
                return "";
        }
    }

    const stoneWallOnClick = (e, path) => {
        // Do nothing on right mouse click

        if(e.button === 2) return;

        // Storing data in local storage

        localStorage.setItem("page", props.page);

        if(e.button !== 1){
            /**
             * Add fading effect on the unmounted component and remember 
             * information of the unmounted component on left mouse click 
             */

            props.setUnmountComponentValues(true, path);
        }else{
            // Remember information of the unmounted component on scroll wheel click

            props.setUnmountComponentValues(false, path);
        }
        // Fire up unmountComponent epic
        
        props.unmountComponent(null, null,  props.page, e.button);
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "projectShowcaseCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "projectShowcaseTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
    }

    const loadBackgroundImage = (key) => {
        switch(key){
            case 'portfolioProjectShowcasePageId1BackgroundImg1':
                return Images.ID_2_BIG_IMAGES_1;
            case 'portfolioProjectShowcasePageId2BackgroundImg1':
                return Images.ID_3_GALLERY_5;
            case 'portfolioProjectShowcasePageId3BackgroundImg1':
                return Images.ID_1_SMALL_SLIDER_6;
            default:
                return "";
        }
    }

    const renderProjectShowcaseImages = (imagesArray) => {
        return(
            <div className="project-showcase-images">{imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-image"
                    >
                        <img 
                            src={loadImg(el.key)}
                            // onClick={() => openPhotoViewer(imagesArray, i)}
                        />
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderCategories = (categories, key) => {
        return(
            <div className="project-showcase-categories">{categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-category"
                        // onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`projectShowcaseCategory`, key, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`projectShowcaseCategory`, key, el.id)} 
                    >
                        <H19 className={renderClassName(`projectShowcaseCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = (tags, key) => {
        return(
            <div className="project-showcase-tags">{tags.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="project-showcase-tag"
                        onMouseEnter={() => handleMouseEnter(`projectShowcaseTag`, key, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`projectShowcaseTag`, key, el.id)} 
                    >
                        <H19 className={renderClassName(`projectShowcaseTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    /**
     * Markup
     */

    return(
        <div className="project-showcase">
            <H65 className="h65-nero-poppins">{props.data.header}</H65>
            <EH10/>
            <div className="project-showcase-info-wrapper">
                <div className="project-showcase-text-wrapper">
                    <H22 className="h22-nobel-lustria">{props.data.text}</H22>
                </div>
                <div className="project-showcase-category-date-tags-wrapper">
                    <div className="project-showcase-categories-wrapper">
                        <H22 className="h22-nero-poppins">Category:</H22>
                        {renderCategories(props.data.categories, props.data.key)}
                    </div>
                    <div className="project-showcase-date-wrapper">
                        <H22 className="h22-nero-poppins">Date:</H22>&nbsp;&nbsp;
                        <H19 className="h19-nobel-lustria">{props.data.date}</H19>
                    </div>
                    <div className="project-showcase-tags-wrapper">
                        <H22 className="h22-nero-poppins">Tags:</H22>
                        {renderTags(props.data.tags, props.data.key)}
                    </div>
                </div>
            </div>
            <EH30/>
            {renderProjectShowcaseImages(props.data.imagesArray)}
            <div 
                className="project-showcase-background"
                style={{
                    backgroundImage: `url(${loadBackgroundImage(props.data.backgroundImage.key)})`
                }}
            >

            </div>
        </div>
    );
}

export default ProjectShowcaseItem;
