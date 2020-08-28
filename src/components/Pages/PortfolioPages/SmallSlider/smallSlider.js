/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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

import './smallSlider.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import PhotoViewer from '../../../Parts/PhotoViewer/photoViewer';
import Footer from '../../../Parts/Footer/footer';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Services
*/

import * as Services from "../../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import { 
    H19,
    H22,
    H70,
    EH30,
    EH40,
    EH70
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* SmallSlider component definition and export
*/

export const SmallSlider = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const resizeRef = useRef();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    const [onePercentToPx, setOnePercentToPx] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchSmallSliderPortfolio(props.match.params.id);
        calculateOnePercent(size.width);

        const resize = () => {
            resizeRef.current();
        }

        setShowContent(true);

        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize)
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        calculateOnePercent(size.width);
    }
    
    const calculateOnePercent = (scrWidth) => {
        let screenWidth = scrWidth / 100;

        // console.log(screenWidth)
        setOnePercentToPx(screenWidth);
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallSliderCategory': 
                props.setSmallSliderIsHoveringCategory("on", id);
                break;
            case 'smallSliderTag': 
                props.setSmallSliderIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallSliderCategory': 
                props.setSmallSliderIsHoveringCategory("off", id);
                break;
            case 'smallSliderTag': 
                props.setSmallSliderIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallSliderCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallSliderTag"){
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

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallSlider");
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallSlider"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="smallSlider"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="smallSlider"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="smallSlider"
                    />
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <div className="small-slider-categories">{props.smallSliderPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-slider-category"
                        onMouseEnter={() => handleMouseEnter(`smallSliderCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallSliderCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallSliderCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-slider-tags">{props.smallSliderPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="small-images-tag"
                        onMouseEnter={() => handleMouseEnter(`smallSliderTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallSliderTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallSliderTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallSliderContent = () => {
        if(props.smallSliderPortfolio.loading && !props.smallSliderPortfolio.error){
            return(
                <div 
                    className="small-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallSliderPortfolio.loading && !props.smallSliderPortfolio.error){
            let translatedValue;
            let paddingOneSide;
            
            if(size.width > 1110){
                translatedValue = onePercentToPx * 69;
                paddingOneSide = 130;
            }else if(size.width < 1100 && size.width > 900){
                translatedValue = size.width;
                paddingOneSide = 130;
            }else if(size.width < 900 && size.width > 680){
                translatedValue = size.width;
                paddingOneSide = 70;
            }else if(size.width < 680){
                translatedValue = size.width;
                paddingOneSide = 30;
            }
            return(
                <div className="small-slider-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallSliderPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallSliderContent"
                        className="small-slider-content"
                    >
                        <div className="small-slider-portfolio-swiper">
                            <Swiper
                                component="smallSlider"
                                contentArray={props.smallSliderPortfolio.item.imagesArray}
                                content={props.smallSliderPortfolio}
                                translateWidth={translatedValue - paddingOneSide}
                                showNumbersOfSlides={1}
                                autoPlay
                            />
                        </div>
                       
                        <div className="small-slider-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallSliderPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            {renderCategories()}
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallSliderPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                    <PortfolioNavigation component="smallSlider"/>
                </div>
            )
        }
        if(!props.smallSliderPortfolio.loading && props.smallSliderPortfolio.error){
            return(
                <div 
                    className="small-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.smallSliderPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="small-slider" id="smallSlider">
            {renderToolbars()}
            {showContent ? renderSmallSliderContent() : null}
            <Footer/>
            {props.photoViewerForSmallSliderOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallSlider"
            /> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallSliderPortfolio: Selectors.getSmallSliderPortfolioState(state),
            photoViewerForSmallSliderOpen: Selectors.getPhotoViewerForSmallSliderOpenState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallSliderPortfolio: bindActionCreators(Services.fetchSmallSliderPortfolio, dispatch),
            setSmallSliderIsHoveringCategory: bindActionCreators(Actions.setSmallSliderIsHoveringCategory, dispatch),
            setSmallSliderIsHoveringTag: bindActionCreators(Actions.setSmallSliderIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
        };
    }
)(SmallSlider);
 