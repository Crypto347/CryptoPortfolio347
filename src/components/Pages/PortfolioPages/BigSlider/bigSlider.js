/**
* Libraries
*/

import React, {
    useState,
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

import './bigSlider.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
import PortfolioNavigation from '../../../Parts/PortfolioNavigation/porfolioNavigation';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

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
* Images
*/


/**
* BigSlader component definition and export
*/

export const BigSlader = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");
    const [moveStepMovablePart, setMoveStepMovablePart] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        window.scrollTo(0, 0);
        props.fetchBigSliderPortfolio(props.match.params.id);

        setShowContent(true);

        window.addEventListener('wheel', handleOnWheel);

        return () => window.removeEventListener('wheel', handleOnWheel);
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("bigSlider");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            setShowBackToTop(true);
        }else{
            setShowBackToTop(false);
        }
    
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

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'bigSliderCategory': 
                props.setBigSliderIsHoveringCategory("on", id);
                break;
            case 'bigSliderTag': 
                props.setBigSliderIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'bigSliderCategory': 
                props.setBigSliderIsHoveringCategory("off", id);
                break;
            case 'bigSliderTag': 
                props.setBigSliderIsHoveringTag("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "bigSliderCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "bigSliderTag"){
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

    const onClickHandler = (path, key, e) => {
        if(e.button === 2) return;
        localStorage.setItem("archiveCategory", key);
        localStorage.setItem("page", localStorage.getItem("page"));
        if(props.archive.category !== key && e.button !== 1){
            props.clearArchiveData();
        }
        if(e.button !== 1){
            props.setUnmountComponentValues(true, path);
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(key, path, "bigSlider", e.button);
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="bigSlider"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="bigSlider"
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
                        page="bigSlider"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="bigSlider"
                    />
                </>
            )
        }
    }

    const renderCategories = () => {
        return(
            <div className="big-slider-categories">{props.bigSliderPortfolio.item.categories.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="big-slider-category"
                        onMouseDown={(e) => onClickHandler(el.path, el.key, e)}
                        onMouseEnter={() => handleMouseEnter(`bigSliderCategory`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`bigSliderCategory`, el.id)} 
                    >
                        <H19 className={renderClassName(`bigSliderCategory`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="big-slider-tags">{props.bigSliderPortfolio.item.tags.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="big-slider-tag"
                        onMouseEnter={() => handleMouseEnter(`bigSliderTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`bigSliderTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`bigSliderTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderBigSliderContent = () => {
        if(props.bigSliderPortfolio.loading && !props.bigSliderPortfolio.error){
            return(
                <div 
                    className="big-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.bigSliderPortfolio.loading && !props.bigSliderPortfolio.error){
            return(
                <div className="big-slider-wrapper">
                    <H70 className="h70-nero-poppins">{props.bigSliderPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="bigSliderContent"
                        className="big-slider-content"
                    >
                        <Swiper
                           component="bigSlider"
                           contentArray={props.bigSliderPortfolio.item.imagesArray}
                           content={props.bigSliderPortfolio}
                           translateWidth={size.width - 130}
                           showNumbersOfSlides={1}
                        //    autoPlay
                        />
                        <EH40/>
                        <div className="big-slider-content-info">
                            <div className="big-slider-text-wrapper">
                                <H19 className="h19-nobel-lustria">{props.bigSliderPortfolio.item.text}</H19>
                            </div>
                            <div className="big-slider-category-date-tags-wrapper">
                                <H22 className="h22-nero-poppins">Category:</H22>
                                {renderCategories()}
                                <EH40/>
                                <H22 className="h22-nero-poppins">Date:</H22>
                                <H19 className="h19-nobel-lustria">{props.bigSliderPortfolio.item.date}</H19>
                                <EH40/>
                                <H22 className="h22-nero-poppins">Tags:</H22>
                                {renderTags()}
                            </div>
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation component="bigSlider"/>
                </div>
            )
        }
        if(!props.bigSliderPortfolio.loading && props.bigSliderPortfolio.error){
            return(
                <div 
                    className="big-slider-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.bigSliderPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="big-slider" id="bigSlider">
            {renderToolbars()}
            {showContent ? renderBigSliderContent() : null}
            <Footer/>
            {showBackToTop ? <BackToTop/> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            bigSliderPortfolio: Selectors.getBigSliderPortfolioState(state),
            archive: Selectors.getArchiveState(state)
        };
    },
    (dispatch) => {
        return {
            fetchBigSliderPortfolio: bindActionCreators(Services.fetchBigSliderPortfolio, dispatch),
            setBigSliderIsHoveringCategory: bindActionCreators(Actions.setBigSliderIsHoveringCategory, dispatch),
            setBigSliderIsHoveringTag: bindActionCreators(Actions.setBigSliderIsHoveringTag, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(BigSlader);
 