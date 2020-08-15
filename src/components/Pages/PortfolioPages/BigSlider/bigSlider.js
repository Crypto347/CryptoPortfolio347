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

//Id1

import Id1SmallImages1 from '../../../../images/smallImages/id1/adam-wilson-1QZYZib7eYs-unsplash.jpg';
import Id1SmallImages2 from '../../../../images/smallImages/id1/jason-blackeye-DKCgibUVLNc-unsplash.jpg';
import Id1SmallImages3 from '../../../../images/smallImages/id1/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg';
import Id1SmallImages4 from '../../../../images/smallImages/id1/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg';
import Id1SmallImages5 from '../../../../images/smallImages/id1/shelbey-miller-HIQd4db8Kr8-unsplash.jpg';

//Id2

import Id2SmallImages1 from '../../../../images/smallImages/id2/jess-bailey-MSH3ldaRZsg-unsplash.jpg';
import Id2SmallImages2 from '../../../../images/smallImages/id2/paper-3025558_1920.jpg';

//Id3

import Id3SmallImages1 from '../../../../images/smallImages/id3/jess-bailey-dWKqZcPLc8Y-unsplash.jpg';
import Id3SmallImages2 from '../../../../images/smallImages/id3/jess-bailey-L71uKsAVo4g-unsplash.jpg';
import Id3SmallImages3 from '../../../../images/smallImages/id3/jess-bailey-z0guTIr_kts-unsplash.jpg';

//Id4

import Id4SmallImages1 from '../../../../images/smallImages/id4/clay-banks-_wkd7XBRfU4-unsplash.jpg';
import Id4SmallImages2 from '../../../../images/smallImages/id4/marina-zaharkina-TKQXY1dAgjE-unsplash.jpg';
import Id4SmallImages3 from '../../../../images/smallImages/id4/ohmky-lQwWZI_WjSU-unsplash.jpg';

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

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchBigSliderPortfolio(props.match.params.id);

        if(props.bigSliderPortfolio.item !== {}){
            setShowContent(true)
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let contentOffsetTop = document.getElementById("bigSliderContent") ? document.getElementById("bigSliderContent").offsetTop : 0;
        let imagesOffsetTop = document.getElementById("bigSliderPortfolioImages") ? document.getElementById("bigSliderPortfolioImages").offsetTop : 0;
        let imagesOffsetHeight = document.getElementById("bigSliderPortfolioImages") ? document.getElementById("bigSliderPortfolioImages").offsetHeight : 0;
        let movablePartHeight = document.getElementById("sbigSliderMovablePart") ? document.getElementById("bigSliderMovablePart").offsetHeight : 0;
        let moveUntil = imagesOffsetTop + imagesOffsetHeight - movablePartHeight;

        // Set margin top of movable part

        if(scrollHeight > contentOffsetTop && scrollHeight < moveUntil){
            setMoveStepMovablePart(scrollHeight - contentOffsetTop);
        } 
        else if(scrollHeight > moveUntil) {
            setMoveStepMovablePart(imagesOffsetHeight - movablePartHeight - 30);
        } 
        else {
            setMoveStepMovablePart(0);
        }
    }

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallImages1':
                return Id1SmallImages1;
            case 'id1SmallImages2':
                return Id1SmallImages2;
            case 'id1SmallImages3':
                return Id1SmallImages3;
            case 'id1SmallImages4':
                return Id1SmallImages4;
            case 'id1SmallImages5':
                return Id1SmallImages5;
            case 'id2SmallImages1':
                return Id2SmallImages1;
            case 'id2SmallImages2':
                return Id2SmallImages2;
            case 'id3SmallImages1':
                return Id3SmallImages1;
            case 'id3SmallImages2':
                return Id3SmallImages2;
            case 'id3SmallImages3':
                return Id3SmallImages3;
            case 'id4SmallImages1':
                return Id4SmallImages1;
            case 'id4SmallImages2':
                return Id4SmallImages2;
            case 'id4SmallImages3':
                return Id4SmallImages3;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'bigSliderCategory': 
                setIsHoveringCategoryText("on");
                break;
            case 'bigSliderTag1': 
                props.setBigSliderIsHoveringTag("on", id);
                break;
            case 'bigSliderTag2': 
                props.setBigSliderIsHoveringTag("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'bigSliderCategory': 
                setIsHoveringCategoryText("off");
                break;
            case 'bigSliderTag1': 
                props.setBigSliderIsHoveringTag("off", id);
                break;
            case 'bigSliderTag2': 
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
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "bigSliderTag1"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
        if(opt === "bigSliderTag2"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-hover-on";
                case 'off':
                    return "h19-nobel-lustria-hover-off"
            }
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("bigSlider");
    
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
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
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
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                    />
                </>
            )
        }
    }

    const renderPortfolioImages = () => {
        return(
            <div 
                id="bigSliderPortfolioImages"
                className="big-slider-portfolio-images"
            >{props.bigSliderPortfolio.item.imagesArray.map((el,i) => {
                return(
                    <div 
                        key={i}
                        className="big-slider-portfolio-image"
                    >
                        <img src={loadImg(el.imageName)}/>
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="big-slider-tags">{props.bigSliderPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`bigSliderTag${el.id}`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`bigSliderTag${el.id}`, el.id)} 
                    >
                        <H19 className={renderClassName(`bigSliderTag${el.id}`, el.isHover)}>{el.label}</H19>
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
                       
                    </div>
                   <PortfolioNavigation/>
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
        </div>
    );
}

export default connect(
    (state) => {
        return {
            bigSliderPortfolio: Selectors.getBigSliderPortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            fetchBigSliderPortfolio: bindActionCreators(Services.fetchBigSliderPortfolio, dispatch),
            setBigSliderIsHoveringTag: bindActionCreators(Actions.setBigSliderIsHoveringTag, dispatch)
        };
    }
)(BigSlader);
 