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
    Route,
    Switch
} from 'react-router-dom';

/**
 * Styles
 */

import './main.scss';

/**
 * Components
 */

import Home from './Pages/HomePages/Home/home';
import AboutUsPage from './Pages/AboutUsPage/aboutUsPage';
import ProcessPage from './Pages/ProcessPage/processPage';
import HappyTeamPage from './Pages/HappyTeamPage/happyTeamPage';
import SmallImages from './Pages/PortfolioPages/SmallImages/smallImages';
import BigSlider from './Pages/PortfolioPages/BigSlider/bigSlider';
import BigImages from './Pages/PortfolioPages/BigImages/bigImages';
import SmallGallery from './Pages/PortfolioPages/SmallGallery/smallGallery';
import Gallery from './Pages/PortfolioPages/Gallery/gallery';
import SmallSlider from './Pages/PortfolioPages/SmallSlider/smallSlider';
import PortfolioGallery from './Pages/HomePages/PortfolioGallery/portfolioGallery';
import Archive from './Pages/Archive/archive';
import SwitchImagePage from './Pages/PortfolioPages/SwitchImagePage/switchImagePage';
import SimpleOverlayPage from './Pages/PortfolioPages/SimpleOverlayPage/simpleOverlayPage';
import SlideFromImageLeftPage from './Pages/PortfolioPages/SlideFromImageLeftPage/slideFromImageLeftPage';
import OverlayPage from './Pages/PortfolioPages/OverlayPage/overlayPage';
import OverlayWithInfoPage from './Pages/PortfolioPages/OverlayWithInfoPage/overlayWithInfoPage';
import StandardPage from './Pages/PortfolioPages/StandardPage/standardPage';
import GalleryPage from './Pages/PortfolioPages/GalleryPage/galleryPage';
import GalleryWithSpacePage from './Pages/PortfolioPages/GalleryWithSpacePage/galleryWithSpacePage';
import StoneWallPage from './Pages/PortfolioPages/StoneWallPage/stoneWallPage';
import StoneWallWidePage from './Pages/PortfolioPages/StoneWallWidePage/stoneWallWidePage';
import MetroPage from './Pages/PortfolioPages/MetroPage/metroPage';
import Pinterest3ColumnsPage from './Pages/PortfolioPages/Pinterest3ColumnsPage/pinterest3ColumnsPage';
import TwoColumnsWidePage from './Pages/PortfolioPages/TwoColumnsWidePage/twoColumnsWidePage';
import ThreeColumnsWidePage from './Pages/PortfolioPages/ThreeColumnsWidePage/threeColumnsWidePage';
import FourColumnsWidePage from './Pages/PortfolioPages/FourColumnsWidePage/fourColumnsWidePage';
import FiveColumnsWidePage from './Pages/PortfolioPages/FiveColumnsWidePage/fiveColumnsWidePage';
import TwoColumnsPage from './Pages/PortfolioPages/TwoColumnsPage/twoColumnsPage';
import ThreeColumnsPage from './Pages/PortfolioPages/ThreeColumnsPage/threeColumnsPage';

/**
 * Actions
 */

import * as Actions from '../actions';

/**
 * Selectors
 */

import * as Selectors from '../reducers/selectors';

/**
 * Utilities
 */

import * as Utility from '../utility';

/**
 * Main component definition and export
 */

export const Main = (props) => {
   
    /**
     * Methods
     */

    useEffect(() => {
        /**
         * Set all necessary information when initializing the application 
         */

        // Activate menu item according to the location pathname
        
        let path = props.location.pathname.slice(18);
        let pathOfIds = Utility.findPathOfIds(path);
        props.clearActivityOfMenuItems();
        props.activateMenuItem(pathOfIds);

        // Init state for fading effect and remember all necessary information

        props.setArchiveCategory(localStorage.getItem('archiveCategory'));
        props.setUnmountComponentValues(false, '', localStorage.getItem('page'));

        /**
         * Set all necessary information when changing location
         */

        props.history.listen((location, action) => {
            /** 
             * If we returned to the archive page, remember
             * the new category and reload the page
             */
            
            let category = Utility.categoryFromLocationPathname(location.pathname);
            if(action === "POP" && category){
                props.setArchiveCategory(category);
                window.location.reload();
            }

            // Activate menu item according to the location pathname

            path = location.pathname.slice(18);
            pathOfIds = Utility.findPathOfIds(path);
            props.clearActivityOfMenuItems();
            props.activateMenuItem(pathOfIds);
            console.log("activateMenuItem", pathOfIds);

            // Close photoViewer for all pages
            props.photoViewerOpen("all", false, []);
        });
    }, []);

    /**
     * Markup
     */

    return(
        <div className={props.unmountComp.state ? "main-unmount" : "main"}>
            <Switch>
                <Route
                    exact 
                    path={props.match.url + "/three-columns"}
                    component={ThreeColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/two-columns"}
                    component={TwoColumnsPage}
                />
                <Route
                    exact 
                    path={props.match.url + "/five-columns-wide"}
                    component={FiveColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/four-columns-wide"}
                    component={FourColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/three-columns-wide"}
                    component={ThreeColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/two-columns-wide"}
                    component={TwoColumnsWidePage}
                />
                <Route
                    exact 
                    path={props.match.url + "/pinterest-3-columns"}
                    component={Pinterest3ColumnsPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/metro"}
                    component={MetroPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/stone-wall-wide"}
                    component={StoneWallWidePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/stone-wall"}
                    component={StoneWallPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/gallery-with-space"}
                    component={GalleryWithSpacePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/gallery"}
                    component={GalleryPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-standard"}
                    component={StandardPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/overlay-with-info"}
                    component={OverlayWithInfoPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/overlay"}
                    component={OverlayPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/slide-from-image-left"}
                    component={SlideFromImageLeftPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/simple-overlay"}
                    component={SimpleOverlayPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/switch-image"}
                    component={SwitchImagePage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-category/:category"}
                    render={(props) => (
                        <Archive key={props.match.params.category} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-gallery"}
                    component={PortfolioGallery}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-slider/:id"}
                    render={(props) => (
                        <SmallSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/gallery/:id"}
                    render={(props) => (
                        <Gallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-gallery/:id"}
                    render={(props) => (
                        <SmallGallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-images/:id"}
                    render={(props) => (
                        <BigImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-slider/:id"}
                    render={(props) => (
                        <BigSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-images/:id"}
                    render={(props) => (
                        <SmallImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/happy-team"}
                    component={HappyTeamPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/process"}
                    component={ProcessPage}
                /> 
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUsPage}
                />
                <Route 
                    exact 
                    path={props.match.url + ""}
                    component={Home}
                />
            </Switch>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            unmountComp: Selectors.getUnmountComponentState(state)
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            setArchiveCategory: bindActionCreators(Actions.setArchiveCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch)
        };
    }
)(Main);
 