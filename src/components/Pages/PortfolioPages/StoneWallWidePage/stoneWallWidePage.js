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

import './stoneWallWidePage.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import StoneWallWideItem from '../../../SmallParts/StoneWallWideItem/stoneWallWideItem';
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
    H15,
    H22,
    H65,
    H70,
    EH20,
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
* StoneWallWidePage component definition and export
*/

export const StoneWallWidePage = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [prevScreenWidthVal, setPrevScreenWidthVal] = useState(0);
    const [classNameImg1, setClassNameImg1] = useState('stone-wall-wide-page-item-id1');
    const [classNameImg2, setClassNameImg2] = useState('stone-wall-wide-page-item-id2');
    const [classNameImg3, setClassNameImg3] = useState('stone-wall-wide-page-item-id3');
    const [classNameImg4, setClassNameImg4] = useState('stone-wall-wide-page-item-id4');
    const [classNameImg5, setClassNameImg5] = useState('stone-wall-wide-page-item-id5');

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.stoneWallWidePage.items.length === 0){
            props.fetchStoneWallWidePage();
        }
        let timeout = setTimeout(() => {
            if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                console.log("PPP",itemOffsetTop)
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const resize = () => {
            resizeRef.current();
        }
 
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            props.setMenuDotsState("init", "");
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = (e) => {
        setPrevScreenWidthVal(size.width);
        console.log(prevScreenWidthVal, size.width)
        if(size.width > 1200){
            // setClassNameImg2("stone-wall-wide-page-item-id2");
            // setClassNameImg3("stone-wall-wide-page-item-id3");
            // setClassNameImg4("stone-wall-wide-page-item-id4");
            // setClassNameImg5("stone-wall-wide-page-item-id5");
        }
        if(size.width < 1200 && size.width > 1024 && prevScreenWidthVal < size.width){
            // setClassNameImg2("stone-wall-wide-page-item-id2-animation-expand-screen");
            // setClassNameImg3("stone-wall-wide-page-item-id3-animation-expand-screen");
            // setClassNameImg4("stone-wall-wide-page-item-id4-animation-expand-screen");
            // setClassNameImg5("stone-wall-wide-page-item-id5-animation-expand-screen");
        }
        if(size.width < 1025 && size.width > 840){
            // setClassNameImg2("stone-wall-wide-page-item-id2-animation-narrow-screen");
            // setClassNameImg3("stone-wall-wide-page-item-id3-animation-narrow-screen");
            // setClassNameImg4("stone-wall-wide-page-item-id4-animation-narrow-screen");
            // setClassNameImg5("stone-wall-wide-page-item-id5-animation-narrow-screen");
        }
        if(size.width < 840 && size.width > 670 && prevScreenWidthVal > size.width){
            // setClassNameImg2("stone-wall-wide-page-item-id2");
            // setClassNameImg3("stone-wall-wide-page-item-id3");
            // setClassNameImg4("stone-wall-wide-page-item-id4");
            // setClassNameImg5("stone-wall-wide-page-item-id5");
        }
        if(size.width < 840 && size.width > 670 && prevScreenWidthVal < size.width){
            // setClassNameImg2("stone-wall-wide-page-item-id2-animation-expand2-screen");
            // setClassNameImg3("stone-wall-wide-page-item-id3-animation-expand2-screen");
            // setClassNameImg4("stone-wall-wide-page-item-id4-animation-expand2-screen");
            // setClassNameImg5("stone-wall-wide-page-item-id5-animation-expand2-screen");
        }
        if(size.width < 670 && size.width > 480 && prevScreenWidthVal > size.width){
            // setClassNameImg2("stone-wall-wide-page-item-id2-animation-narrow2-screen");
            // setClassNameImg3("stone-wall-wide-page-item-id3-animation-narrow2-screen");
            // setClassNameImg4("stone-wall-wide-page-item-id4-animation-narrow2-screen");
            // setClassNameImg5("stone-wall-wide-page-item-id5-animation-narrow2-screen");
        }
        if(size.width < 480){
            // setClassNameImg2("stone-wall-wide-page-item-id2");
            // setClassNameImg3("stone-wall-wide-page-item-id3");
            // setClassNameImg4("stone-wall-wide-page-item-id4");
            // setClassNameImg5("stone-wall-wide-page-item-id5");
        }
        if(size.width < 1025 && size.width > 770 && prevScreenWidthVal < size.width){

            // setClassNameImg3("stone-wall-wide-page-item-id3-animation-expand-screen");
        }

        // if(size.width < 770 && size.width > 680 && size.width < prevScreenWidthVal){
        //     console.log("short2");
        // }
        // if(size.width < 770 && size.width > 680 && size.width > prevScreenWidthVal){
        //     console.log("long2");
        // }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("stoneWallWidePage");
    
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
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
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
                        page="stoneWallWidePage"
                    />
                    <Toolbar 
                        style="regularScreen"
                        toolbarMainColor="regular"
                        page="stoneWallWidePage"
                    />
                </>
            )
        }
    }

    const renderStyle = (id) => {
        switch(id){
            case 1:
                return {
                    width: `${100/4}%`,
                    height: `${100/3}%`
                };
            case 2:
                return {
                    width: `${100/2}%`,
                    height: `${100/3*2}%`

                };
            case 3:
                return {
                    width: `${100/4}%`,
                    height: `${100/3}%`
                };
            case 4:
                return {
                    width: `${100/4}%`,
                    height: `${100/3*2}%`
                };
            case 5:
                return {
                    width: `${100/4}%`,
                    height: `${100/3}%`
                };
            case 6:
                return {
                    width: `${100/4}%`,
                    height: `${100/3}%`
                };
            case 7:
                return {
                    width: `${100/2}%`,
                    height: `${100/3}%`
                };
        }
    }
    
    const renderStoneWallWidePageData = () => {
        return(
            <div 
            // className="stone-wall-wide-page-items"
            style={{
                position: "relative",
                width: `100%`,
                height: "1169.99px",
                border: "2px solid red"
            }}
            
            >{props.stoneWallWidePage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`stone-wall-wide-page-item-id${el.id}`}
                        // className={renderClassName(el.id)}
                        style={renderStyle(el.id)}
                    >
                        <StoneWallWideItem
                            page="stoneWallWidePage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent} 
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderStoneWallWideContent = () => {
        if(props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && !props.stoneWallWidePage.error){
            return(
                <div className="stone-wall-wide-page-wrapper">
                    {renderStoneWallWidePageData()}
                </div>
            )
        }
        if(!props.stoneWallWidePage.loading && props.stoneWallWidePage.error){
            return(
                <div 
                    className="stone-wall-wide-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.stoneWallWidePage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="stone-wall-wide-page" id="stoneWallWidePage">
            {renderToolbars()}
            <div className="stone-wall-wide-page-header">
                <H65 className="h65-white-poppins">Tiam convallis,</H65>
                <H65 className="h65-white-poppins">Felis quis dapibus libero.</H65>
                <EH30/>
                <H22 className="h22-nobel-lustria">Lorem ipsum dolor sit amet, quot nusquam mei cu diceret .</H22>
            </div> 
            {renderStoneWallWideContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            stoneWallWidePage: Selectors.getStoneWallWidePageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchStoneWallWidePage: bindActionCreators(Services.fetchStoneWallWidePage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setStandardPageIsHoveringCategory: bindActionCreators(Actions.setStandardPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(StoneWallWidePage);
 