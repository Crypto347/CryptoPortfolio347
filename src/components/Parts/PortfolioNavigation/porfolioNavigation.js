/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './porfolioNavigation.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H19,
    H25,
    H45,
    EH25,
    EH40
} from '../../UtilityComponents';

/**
* Images
*/

/**
* PorfolioNavigation component definition and export
*/

export const PorfolioNavigation = (props) => {

    /**
    * State
    */
   
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    const [isHoveringMenuButton, setIsHoveringMenuButton] = useState("init");
    const [key, setKey] = useState("");

    /**
    * Methods
    */

    useEffect(() => {
        if(props.portfolioGalleryPage.items.length === 0){
            props.fetchPortfolioGalleryPage();
        }
        let key;
        switch(props.component){
            case 'bigImages':
                key = props.bigImagesPortfolio.item.key
                break; 
            case 'bigSlider':
                key = props.bigSliderPortfolio.item.key
                break; 
            case 'gallery':
                key = props.galleryPortfolio.item.key
                break; 
            case 'smallGallery':
                key = props.smallGalleryPortfolio.item.key
                break; 
            case 'smallImages':
                key = props.smallImagesPortfolio.item.key
                break; 
            case 'smallSlider':
                key = props.smallSliderPortfolio.item.key
                break; 
        }
        props.setHistoryPopFromPortfolioItem(key);
        setKey(key);
    }, []);

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("on");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("on");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("on");
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow("off");
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow("off");
                break;
            case 'menuButton': 
                setIsHoveringMenuButton("off");
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-left";
                case 'on':
                    return "arrow-wrapper-left-lengthen";
                case 'off':
                    return "arrow-wrapper-left-shorten"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-right";
                case 'on':
                    return "arrow-wrapper-right-lengthen";
                case 'off':
                    return "arrow-wrapper-right-shorten"
            }
        }
        if(opt === "menuButton"){
            switch(isHovering){
                case 'init':
                    return "navigation-menu-dot";
                case 'on':
                    return "navigation-menu-dot-hover-on";
                case 'off':
                    return "navigation-menu-dot-hover-off"
            }
        }
    }

    const handleMenuOnClick = () => {
        let page = props.location.state ? props.location.state.page : null;
        switch(page){
            case 'portfolioGallery':
                props.history.push(`/crypto-portfolio/portfolio-gallery`);
                break;
            case 'archive':
                props.history.push(`/crypto-portfolio/portfolio-category/${props.location.state.category}`);
                break;
            case 'switchImagePage':
                props.history.push(`/crypto-portfolio/switch-image`);
                break;
            case 'simpleOverlayPage':
                props.history.push(`/crypto-portfolio/simple-overlay`);
                break;
            case 'slideFromImageLeftPage':
                props.history.push(`/crypto-portfolio/slide-from-image-left`);
                break;
            case 'overlayPage':
                props.history.push(`/crypto-portfolio/overlay`);
                break;
            case 'overlayWithInfoPage':
                props.history.push(`/crypto-portfolio/overlay-with-info`);
                break;
            case 'standardPage':
                props.history.push(`/crypto-portfolio/portfolio-standard`);
                break;
            case 'galleryPage':
                props.history.push(`/crypto-portfolio/gallery`);
                break;
            case 'galleryWithSpacePage':
                props.history.push(`/crypto-portfolio/gallery-with-space`);
                break;
            case 'stoneWallPage':
                props.history.push(`/crypto-portfolio/stone-wall`);
                break;
            default: 
                props.history.push(`/crypto-portfolio/portfolio-gallery`);
                return;
        }
        props.setHistoryPopFromPortfolioItem("scrollToTop");
    }

    const arrowOnClick = (opt, key) => {
        let updatedItems = [];
        let page = props.location.state?.page;
        let category = props.location.state?.category;
        switch(page){
            case 'portfolioGallery':
                updatedItems = [...props.portfolioGalleryPage.items];
                break;
            case 'archive':
                updatedItems = [...props.archive.items];
                break;
            case 'switchImagePage':
                updatedItems = [...props.switchImagePage.items];
                break;
            case 'simpleOverlayPage':
                updatedItems = [...props.simpleOverlayPage.items];
                break;
            case 'slideFromImageLeftPage':
                updatedItems = [...props.slideFromImageLeftPage.items];
                break;
            case 'overlayPage':
                updatedItems = [...props.overlayPage.items];
                break;
            case 'overlayWithInfoPage':
                updatedItems = [...props.overlayWithInfoPage.items];
                break;
            case 'standardPage':
                updatedItems = [...props.standardPage.items];
                break;
            case 'galleryPage':
                updatedItems = [...props.galleryPage.items];
                break;
            case 'galleryWithSpacePage':
                updatedItems = [...props.galleryWithSpacePage.items];
                break;
            case 'stoneWallPage':
                updatedItems = [...props.stoneWallPage.items];
                break;
            default: 
                updatedItems = [...props.portfolioGalleryPage.items];
                break;
        }
        console.log("updatedItems", updatedItems)
        let updatedItemIndex = updatedItems.findIndex(item => item.key === key);
        switch(opt) {
            case 'prev':
                if(updatedItemIndex === 0){
                    props.history.push(`/crypto-portfolio/${updatedItems[updatedItems.length - 1].path}`, {page: page, category: category});
                }else{
                    props.history.push(`/crypto-portfolio/${updatedItems[updatedItemIndex - 1].path}`, {page: page, category: category});
                }
                return;
            case 'next':
                if(updatedItemIndex === updatedItems.length - 1){
                    props.history.push(`/crypto-portfolio/${updatedItems[0].path}`, {page: page, category: category});
                }else{
                    props.history.push(`/crypto-portfolio/${updatedItems[updatedItemIndex + 1].path}`, {page: page, category: category});
                }
                return;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="porfolio-navigation">
            <div 
                className={renderClassName("leftArrow", isHoveringLeftArrow)}
                onMouseEnter={() => handleMouseEnter("leftArrow")} 
                onMouseLeave={() => handleMouseLeave("leftArrow")} 
                onClick={() => arrowOnClick('prev', key)}
            >
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
                <div className="arrow-horizontal-line"/>
            </div>

            <div 
                className="navigation-menu"
                onClick={handleMenuOnClick}
                onMouseEnter={() => handleMouseEnter("menuButton")} 
                onMouseLeave={() => handleMouseLeave("menuButton")} 
            >
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
                <div className={renderClassName("menuButton", isHoveringMenuButton)}/>
            </div>
            <div 
                className={renderClassName("rightArrow", isHoveringRightArrow)}
                onMouseEnter={() => handleMouseEnter("rightArrow")} 
                onMouseLeave={() => handleMouseLeave("rightArrow")} 
                onClick={() => arrowOnClick('next', key)}
            >
                <div className="arrow-horizontal-line"/>
                <div className="arrow-wrapper">
                    <div className="arrow-top-line"></div>
                    <div className="arrow-bottom-line"></div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            archive: Selectors.getArchiveState(state),
            switchImagePage: Selectors.getSwitchImagePageState(state),
            simpleOverlayPage: Selectors.getSimpleOverlayPageState(state),
            slideFromImageLeftPage: Selectors.getSlideFromImageLeftPageState(state),
            overlayPage: Selectors.getOverlayPageState(state),
            overlayWithInfoPage: Selectors.getOverlayWithInfoPageState(state),
            standardPage: Selectors.getStandardPageState(state),
            galleryPage: Selectors.getGalleryPageState(state),
            galleryWithSpacePage: Selectors.getGalleryWithSpacePageState(state),
            stoneWallPage: Selectors.getStoneWallPageState(state),
            bigImagesPortfolio: Selectors.getBigImagesPortfolioState(state),
            bigSliderPortfolio: Selectors.getBigSliderPortfolioState(state),
            galleryPortfolio: Selectors.getGalleryPortfolioState(state),
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            smallImagesPortfolio: Selectors.getSmallImagesPortfolioState(state),
            smallSliderPortfolio: Selectors.getSmallSliderPortfolioState(state)
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch)
        };
    }
)(withRouter(PorfolioNavigation));
 