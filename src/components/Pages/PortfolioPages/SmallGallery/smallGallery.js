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

import './smallGallery.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
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
* Images
*/

//Id1

import Id1SmallGallery1 from '../../../../images/portfolioPages/smallGallery/id1/ash-from-modern-afflatus-updated1-unsplash.png';
import Id1SmallGallery2 from '../../../../images/portfolioPages/smallGallery/id1/estee-janssens-updated1-unsplash.png';
import Id1SmallGallery3 from '../../../../images/portfolioPages/smallGallery/id1/filip-mroz-updated1-unsplash.png';
import Id1SmallGallery4 from '../../../../images/portfolioPages/smallGallery/id1/georgie-cobbs-muOHbrFGEQY-updated1-unsplash.png';
import Id1SmallGallery5 from '../../../../images/portfolioPages/smallGallery/id1/laura-chouette-updated1-unsplash.png';
import Id1SmallGallery6 from '../../../../images/portfolioPages/smallGallery/id1/nadine-shaabana-updated1-unsplash.png';

//Id2

import Id2SmallGallery1 from '../../../../images/portfolioPages/smallGallery/id2/hope-house-press-leather-diary-studio-PJzc7LOt2Ig-updated-unsplash.png';
import Id2SmallGallery2 from '../../../../images/portfolioPages/smallGallery/id2/jess-bailey-ycTvvg1mPU4-updated-unsplash.png';
import Id2SmallGallery3 from '../../../../images/portfolioPages/smallGallery/id2/nahuel-hawkes-Ki6JO9sraB8-updated-unsplash.png';
import Id2SmallGallery4 from '../../../../images/portfolioPages/smallGallery/id2/stil-8-GAoVpIk4M-updated-unsplash.png';

//Id3

import Id3SmallGallery1 from '../../../../images/portfolioPages/smallGallery/id3/eyeshadow-4713577_1920-updated.png';
import Id3SmallGallery2 from '../../../../images/portfolioPages/smallGallery/id3/gabrielle-henderson-xTLqJqtq8R4-updated-unsplash.png';
import Id3SmallGallery3 from '../../../../images/portfolioPages/smallGallery/id3/jess-bailey-_969XXSgWc0-updated-unsplash.png';
import Id3SmallGallery4 from '../../../../images/portfolioPages/smallGallery/id3/laura-chouette-HTowfw8ascU-updated-unsplash.png';
import Id3SmallGallery5 from '../../../../images/portfolioPages/smallGallery/id3/life-3602514_1920-updated.png';
import Id3SmallGallery6 from '../../../../images/portfolioPages/smallGallery/id3/samantha-gades-pKt9mfEuZrs-updated-unsplash.png';

/**
* SmallGallery component definition and export
*/

export const SmallGallery = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHoveringCategoryText, setIsHoveringCategoryText] = useState("init");

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        props.fetchSmallGalleryPortfolio(props.match.params.id);

        if(props.smallGalleryPortfolio.item !== {}){
            setShowContent(true);
        }

        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleOnWheel);
        }
    }, []);

    const loadImg = (key) => {
        switch(key) {
            case 'id1SmallGallery1':
                return Id1SmallGallery1;
            case 'id1SmallGallery2':
                return Id1SmallGallery2;
            case 'id1SmallGallery3':
                return Id1SmallGallery3;
            case 'id1SmallGallery4':
                return Id1SmallGallery4;
            case 'id1SmallGallery5':
                return Id1SmallGallery5;
            case 'id1SmallGallery6':
                return Id1SmallGallery6;
            case 'id2SmallGallery1':
                return Id2SmallGallery1;
            case 'id2SmallGallery2':
                return Id2SmallGallery2;
            case 'id2SmallGallery3':
                return Id2SmallGallery3;
            case 'id2SmallGallery4':
                return Id2SmallGallery4;
            case 'id3SmallGallery1':
                return Id3SmallGallery1;
            case 'id3SmallGallery2':
                return Id3SmallGallery2;
            case 'id3SmallGallery3':
                return Id3SmallGallery3;
            case 'id3SmallGallery4':
                return Id3SmallGallery4;
            case 'id3SmallGallery5':
                return Id3SmallGallery5;
            case 'id3SmallGallery6':
                return Id3SmallGallery6;
            default:
                return "";
        }
    }

    const handleMouseEnter = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                setIsHoveringCategoryText("on");
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("on", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("on", id);
                break;
        }
    }

    const handleMouseLeave = (opt, id) => {
        switch(opt){
            case 'smallGalleryCategory': 
                setIsHoveringCategoryText("off");
                break;
            case 'smallGalleryTag': 
                props.setSmallGalleryIsHoveringTag("off", id);
                break;
            case 'image': 
                props.setSmallGalleryIsHoveringImage("off", id);
                break;
        }
    }
    
    const renderClassName = (opt, isHovering) => {
        if(opt === "smallGalleryCategory"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "smallGalleryTag"){
            switch(isHovering){
                case 'init':
                    return "h19-nobel-lustria-animated";
                case 'on':
                    return "h19-nobel-lustria-nero-hover-on";
                case 'off':
                    return "h19-nobel-lustria-nero-hover-off"
            }
        }
        if(opt === "image"){
            switch(isHovering){
                case 'init':
                    return "small-gallery-portfolio-image-curtain";
                case 'on':
                    return "small-gallery-portfolio-image-curtain-hover-on";
                case 'off':
                    return "small-gallery-portfolio-image-curtain-hover-off"
            }
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("smallGallery");
    
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

    const openPhotoViewer = (array, activeIndex) => {
        let slidesForPhotoViewer = [...array];
        let removedSlides = [];
        // let currentSlideIndex = slidesForPhotoViewer.findIndex(item => item.id === id);
              
        slidesForPhotoViewer.map((el, i) => {
            if(i < activeIndex){
                removedSlides.push(el);
            }
        })
        slidesForPhotoViewer.splice(0, activeIndex)
      
        if(removedSlides.length !== 0){
            slidesForPhotoViewer.push(removedSlides);
        }

        slidesForPhotoViewer = slidesForPhotoViewer.flat();
        
        props.photoViewerOpen('smallGallery', true, slidesForPhotoViewer);
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
                id="smallGalleryPortfolioImages"
                className="small-gallery-portfolio-images"
            >{props.smallGalleryPortfolio.item.imagesArray.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="small-gallery-portfolio-image-wrapper"
                    >
                        <div 
                            className="small-gallery-portfolio-image"
                            onClick={() => openPhotoViewer(props.smallGalleryPortfolio.item.imagesArray, i)}
                            onMouseEnter={() => handleMouseEnter(`image`, el.id)} 
                            onMouseLeave={() => handleMouseLeave(`image`, el.id)}
                        >
                            <img src={loadImg(el.key)}/>
                            <div className={renderClassName(`image`, el.isHover)}/>
                        </div>
                        <EH30/>
                    </div>
                )
            })}</div>
        )
    }

    const renderTags = () => {
        return(
            <div className="small-gallery-tags">{props.smallGalleryPortfolio.item.tags.map((el,i) => {
                return(
                    <div 
                        key={i}
                        onMouseEnter={() => handleMouseEnter(`smallGalleryTag`, el.id)} 
                        onMouseLeave={() => handleMouseLeave(`smallGalleryTag`, el.id)} 
                    >
                        <H19 className={renderClassName(`smallGalleryTag`, el.isHover)}>{el.label}</H19>
                    </div>
                )
            })}</div>
        )
    }

    const renderSmallGalleryContent = () => {
        if(props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && !props.smallGalleryPortfolio.error){
            return(
                <div className="small-gallery-wrapper">
                    <H70 className="h70-nero-poppins">{props.smallGalleryPortfolio.item.header}</H70>
                    <EH70/>
                    <div 
                        id="smallGalleryContent"
                        className="small-gallery-content"
                    >
                        {renderPortfolioImages()}
                        <div className="small-gallery-content-info">
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.text}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Category:</H22>
                            <H19 
                                className={renderClassName("smallGalleryCategory", isHoveringCategoryText)}
                                onMouseEnter={() => handleMouseEnter('smallGalleryCategory')} 
                                onMouseLeave={() => handleMouseLeave('smallGalleryCategory')}
                            >
                                {props.smallGalleryPortfolio.item.category}
                            </H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Date:</H22>
                            <H19 className="h19-nobel-lustria">{props.smallGalleryPortfolio.item.date}</H19>
                            <EH40/>
                            <H22 className="h22-nero-poppins">Tags:</H22>
                            {renderTags()}
                        </div>
                    </div>
                    <EH70/>
                   <PortfolioNavigation/>
                </div>
            )
        }
        if(!props.smallGalleryPortfolio.loading && props.smallGalleryPortfolio.error){
            return(
                <div 
                    className="small-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H19 className="h19-nobel-lora">{`${props.smallGalleryPortfolio.error}`}</H19>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="small-gallery" id="smallGallery">
            {renderToolbars()}
            {showContent ? renderSmallGalleryContent() : null}
            <Footer/>
            {props.photoViewerForSmallGalleryOpen ? 
            <PhotoViewer
                width={700}
                height={457}
                component="smallGallery"
            /> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            smallGalleryPortfolio: Selectors.getSmallGalleryPortfolioState(state),
            photoViewerForSmallGalleryOpen: Selectors.getPhotoViewerForSmallGalleryOpenState(state),
        };
    },
    (dispatch) => {
        return {
            fetchSmallGalleryPortfolio: bindActionCreators(Services.fetchSmallGalleryPortfolio, dispatch),
            setSmallGalleryIsHoveringTag: bindActionCreators(Actions.setSmallGalleryIsHoveringTag, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setSmallGalleryIsHoveringImage: bindActionCreators(Actions.setSmallGalleryIsHoveringImage, dispatch),
        };
    }
)(SmallGallery);
 