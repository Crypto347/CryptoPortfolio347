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

import './threeColumnsWidePage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MenuFullScreen from '../../../Parts/MenuFullScreen/menuFullScreen';
import OverlayImage from '../../../SmallParts/OverlayImage/overlayImage';
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
    H15,
    H19,
    H45,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* ThreeColumnsWidePage component definition and export
*/

export const ThreeColumnsWidePage = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
  
    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.twoColumnsWidePage.items.length === 0){
            props.fetchTwoColumnsWidePage();
        }

        let timeout = setTimeout(() => {
            if(!props.twoColumnsWidePage.loading && !props.twoColumnsWidePage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);
    
        window.addEventListener('wheel', handleOnWheel);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("twoColumnsWidePage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
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
   
    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="twoColumnsWidePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="twoColumnsWidePage"
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
                        page="twoColumnsWidePage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="twoColumnsWidePage"
                    />
                </>
            )
        }
    }

    const renderTwoColumnsWidePageData = () => {
        return(
            <div className="three-columns-wide-page-items">{props.twoColumnsWidePage.items.map((el, i) => {
                
                return(
                    <div
                        key={i}
                        className="three-columns-wide-page-item"
                        id={el.key}
                    >
                        <OverlayImage
                            page="twoColumnsWidePage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                        />
                        {/* <PortfolioItemCard
                            component="twoColumnsWidePage"
                            obj={el}
                            rememberCoordinateRange={props.rememberCoordinateRangeForSwitchImagePage}
                            imgCoordinateRange={imgCoordinateRange}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            setIsHoveringCategory={props.setSwitchImagePageIsHoveringCategory}
                            // setSwitchImagePageIsHoveringArrow={props.setSwitchImagePageIsHoveringArrow}
                            clearArchiveData={props.clearArchiveData}
                            // archiveCategory={props.archive.category}
                        /> */}
                    </div>
                )
            })}</div>
        )
    }

    const renderTwoColumnsWidePageContent = () => {
        if(props.twoColumnsWidePage.loading && !props.twoColumnsWidePage.error){
            return(
                <div 
                    className="three-columns-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.twoColumnsWidePage.loading && !props.twoColumnsWidePage.error){
            return(
                <div className="three-columns-wide-page-wrapper">
                    <div className="three-columns-wide-page-header">
                        <H45 className="h45-nero-lustria">Three Columns Wide</H45>
                    </div>
                    {renderTwoColumnsWidePageData()}
                </div>
            )
        }
        if(!props.twoColumnsWidePage.loading && props.twoColumnsWidePage.error){
            return(
                <div 
                    className="three-columns-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.twoColumnsWidePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        // <>
            <div className="three-columns-wide-page" id="twoColumnsWidePage">
                {renderToolbars()}
                {renderTwoColumnsWidePageContent()}
                <Footer/>
                {props.showBackToTop ? <BackToTop/> : null}
            </div>
            /* {props.menuDotsState.state === "on" ? 
            <MenuFullScreen 
                page="portfolioGallery"
                state={props.menuDotsState.state}
            /> : null
            }      */
        /* </>  */
    );
}

export default connect(
    (state) => {
        return {
            twoColumnsWidePage: Selectors.getTwoColumnsWidePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchTwoColumnsWidePage: bindActionCreators(Services.fetchTwoColumnsWidePage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            // setSwitchImagePageIsHoveringArrow: bindActionCreators(Actions.setSwitchImagePageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch)
        };
    }
)(ThreeColumnsWidePage);
 