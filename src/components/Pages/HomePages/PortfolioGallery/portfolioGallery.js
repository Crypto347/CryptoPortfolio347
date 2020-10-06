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

import './portfolioGallery.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MenuFullScreen from '../../../Parts/MenuFullScreen/menuFullScreen';
import PortfolioItemCard from '../../../SmallParts/PortfolioItemCard/portfolioItemCard';
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
    H22,
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
* PortfolioGallery component definition and export
*/

export const PortfolioGallery = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const resizeRef = useRef();
    const [showBackToTop, setShowBackToTop] = useState(false);
  
    const initCoordinateRange = [
        {
            id: 1,
            updated: false
        },
        {
            id: 2,
            updated: false
        },
        {
            id: 3,
            updated: false
        },
        {
            id: 4,
            updated: false
        },
        {
            id: 5,
            updated: false
        },
        {
            id: 6,
            updated: false
        },
        {
            id: 7,
            updated: false
        },
        {
            id: 8,
            updated: false
        },
        {
            id: 9,
            updated: false
        },
        {
            id: 10,
            updated: false
        },
        {
            id: 11,
            updated: false
        },
        {
            id: 12,
            updated: false
        },
        {
            id: 13,
            updated: false
        },
        {
            id: 14,
            updated: false
        },
        {
            id: 15,
            updated: false
        },
        {
            id: 16,
            updated: false
        },
        {
            id: 17,
            updated: false
        },
        {
            id: 18,
            updated: false
        }
    ]

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.portfolioGalleryPage.items.length === 0){
            props.fetchPortfolioGalleryPage();
        }

        let timeout = setTimeout(() => {
            if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const resize = () => {
            resizeRef.current();
        }
        window.addEventListener('resize', resize);
        window.addEventListener('wheel', handleOnWheel);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', resize);
            window.removeEventListener('wheel', handleOnWheel)
            props.setMenuDotsState("init", "")
        }
    }, []);

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    const handleResize = () => {
        props.forgetCoordinateRangeForPortfolioGalleryPage(initCoordinateRange);
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            setShowBackToTop(true);
        }else{
            setShowBackToTop(false);
        }
    }

    const renderToolbars = () => {
        return(
            <Toolbar 
                style="toolbarVersion2" 
                toolbarMainColor="white"
                page="portfolioGallery"
            />
        )
    }


    // const onClickHandler = (path) => {
    //     props.setUnmountComponentValues(true, path);
    //     props.unmountComponent(null, null, "portfolioGallery");
    //     props.clearArchiveData();
    // }

    const renderPortfolioGalleryPageItems = () => {
        return(
            <>
                <EH110/>
                <div className="portfolio-gallery-page-items">{props.portfolioGalleryPage.items.map((el, i) => {
                    let imgCoordinateRange = props.portfolioGalleryPage.itemsCooradinateRange.find(item => item.id === el.id);
                    return(
                        <div 
                            key={i}
                            className="portfolio-gallery-page-item"
                            id={el.key}
                        >
                            <PortfolioItemCard
                                component="portfolioGallery"
                                obj={el}
                                rememberCoordinateRange={props.rememberCoordinateRangeForPortfolioGalleryPage}
                                imgCoordinateRange={imgCoordinateRange}
                                setUnmountComponentValues={props.setUnmountComponentValues}
                                unmountComponent={props.unmountComponent}
                                setIsHoveringCategory={props.setPortfolioGalleryPageIsHoveringCategory}
                                // setSwitchImagePageIsHoveringArrow={props.setSwitchImagePageIsHoveringArrow}
                                clearArchiveData={props.clearArchiveData}
                                // archiveCategory={props.archive.category}
                            />
                        </div>
                    )
                })}</div>
            </>
        )
    }

    const renderPortfolioGalleryPageData = () => {
        if(props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.portfolioGalleryPage.loading && !props.portfolioGalleryPage.error){
            return(
                <>
                    {renderPortfolioGalleryPageItems()}
                </>
            )
        }
        if(!props.portfolioGalleryPage.loading && props.portfolioGalleryPage.error){
            return(
                <div 
                    className="portfolio-gallery-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.portfolioGalleryPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <>
            <div className="portfolio-gallery">
                {renderToolbars()}
                <div className="portfolio-gallery-wrapper">
                    <div className="portfolio-gallery-header-wrapper">
                        <div className="header-wrapper">
                            <div className="portfolio-gallery-header-bold">Welcome!</div>
                            <div className="portfolio-gallery-header-text1">Take a Look</div>
                        </div>
                        <div className="portfolio-gallery-header-text2">at Our Portfolio.</div>
                    </div>
                    {renderPortfolioGalleryPageData()}
                </div>
                <Footer/>
            </div>
            {props.menuDotsState.state === "on" ? 
            <MenuFullScreen 
                page="portfolioGallery"
                state={props.menuDotsState.state}
            /> : null}
            {showBackToTop ? <BackToTop/> : null}     
        </> 
    );
}

export default connect(
    (state) => {
        return {
            portfolioGalleryPage: Selectors.getPortfolioGalleryPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            archive: Selectors.getArchiveState(state),
        };
    },
    (dispatch) => {
        return {
            fetchPortfolioGalleryPage: bindActionCreators(Services.fetchPortfolioGalleryPage, dispatch),
            rememberCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.rememberCoordinateRangeForPortfolioGalleryPage, dispatch),
            forgetCoordinateRangeForPortfolioGalleryPage: bindActionCreators(Actions.forgetCoordinateRangeForPortfolioGalleryPage, dispatch),
            setPortfolioGalleryPageIsHoveringCategory: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringCategory, dispatch),
            // setPortfolioGalleryPageIsHoveringArrow: bindActionCreators(Actions.setPortfolioGalleryPageIsHoveringArrow, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
        };
    }
)(PortfolioGallery);
 