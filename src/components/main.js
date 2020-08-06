/**
* Libraries
*/

import React, {
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

import Toolbar from './Parts/Toolbar/toolbar';
import Sidebar from './Parts/Sidebar/sidebar';
import Home from './Pages/Home/home';
import AboutUsPage from './Pages/AboutUsPage/aboutUsPage';
import ProcessPage from './Pages/ProcessPage/processPage';
import HappyTeamPage from './Pages/HappyTeamPage/happyTeamPage';
import SmallImages from './Pages/PortfolioPages/SmallImages/smallImages';
import BigSlider from './Pages/PortfolioPages/BigSlider/bigSlider';
// import Contact from './Pages/Contact/contact';
// import SingleStory from './Pages/SingleStory/singleStory';
// import Archieve from './Pages/Archieve/archieve';
// import Category from './Pages/Category/category';

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
        let path = props.location.pathname.slice(18);
        let pathOfIds = Utility.findPathOfIds(path);
        props.clearActivityOfMenuItems();
        props.activateMenuItem(pathOfIds);
    console.log("PATH",path, pathOfIds)
    }, [])

    /**
    * Markup
    */

    return(
        <div className="main">
            {/* <Toolbar/> */}
            {/* <Sidebar/> */}
            <Switch>
                {/* <Route 
                    exact 
                    path={props.match.url + "/category/specials"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/million-visits"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/new-york-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/contact"}
                    component={Contact}
                />*/}
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-slider/:id"}
                    component={BigSlider}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-images/:id"}
                    component={SmallImages}
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
            // gallery: Selectors.getGalleryState(state)
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            // startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
            // startInitCategories: bindActionCreators(Actions.startInitCategories, dispatch),
            // startInitRecentPosts: bindActionCreators(Actions.startInitRecentPosts, dispatch)
        };
    }
)(Main);
 