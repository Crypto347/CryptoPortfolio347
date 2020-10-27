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

import './sidebar.scss';

/**
 * Components
 */

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * Selectors
 */

import * as Selectors from '../../../reducers/selectors';

/**
 * Sidebar component definition and export
 */

export const Sidebar = (props) => {

    /**
     * State
     */

    const [showOptions, setShowOptions] = useState(false);

    /**
     * Methods
     */

    useEffect(() => {
        
    }, []);

    const handleMouseEnterSidebarItem = (data, id) => {
        props.setIsHoveringMenuItem("on", id);
        setShowOptions(true);
    }

    const handleMouseLeaveSidebarItem = (data) => {
        props.setIsHoveringMenuItem("off");
        setShowOptions(false);
    }

    // const itemOnClick = (opt, path, pathOfIds, e) => {
    //     if(e.button === 2) return;
        
    //     if(e.button !== 1){
    //         props.setUnmountComponentValues(true, path);
    //         props.setHistoryPopFromPortfolioItem("scrollToTop");
    //         props.clearActivityOfMenuItems();
    //         props.setSidebarState("init");
    //         switch(opt){
    //             case 'optionItem': 
    //                 props.setActivityOfToolbarOptionItem(pathOfIds);
    //                 break;
    //             case 'subOptionItem': 
    //                 props.setActivityOfToolbarSubOptionItem(pathOfIds);
    //                 break;
    //         }
    //     }else{
    //         props.setUnmountComponentValues(false, path);
    //     }
    //     props.unmountComponent(null, null, null, e.button);
    // }
    const itemOnClick = (opt, path, pathOfIds, e) => {
        if(e.button === 2) return;
        if(e.button !== 1){
            let currentItemId;
            // props.setUnmountComponentValues(true, path);
            // props.setHistoryPopFromPortfolioItem("scrollToTop");
            // props.clearActivityOfMenuItems();
            switch(opt){
                case 'optionItem': 
                    currentItemId = props.menuItems
                        .find(item => item.active === true)?.options
                        .find(item => item.active === true).array
                        .find(item => item.active === true).id;

                        if(currentItemId === pathOfIds[1]){
                            return;
                        }else{
                            props.setSidebarState("init");
                            props.setUnmountComponentValues(true, path);
                            props.setHistoryPopFromPortfolioItem("scrollToTop");
                            props.clearActivityOfMenuItems();
                            props.setActivityOfToolbarOptionItem(pathOfIds);
                        }
                    break;
                case 'subOptionItem': 
                // need to updated portfolioUtility
                    currentItemId = props.menuItems
                        .find(item => item.active === true)?.options
                        .find(item => item.active === true).array
                        .find(item => item.active === true).subOptions
                        .find(item => item.active === true).id;
                        if(currentItemId === pathOfIds[2]){
                            return;
                        }else{
                            props.setSidebarState("init");
                            props.setUnmountComponentValues(true, path);
                            props.setHistoryPopFromPortfolioItem("scrollToTop");
                            props.clearActivityOfMenuItems();
                            props.setActivityOfToolbarSubOptionItem(pathOfIds);
                        }
                    break;
            }
        }else{
            props.setUnmountComponentValues(false, path);
        }
        props.unmountComponent(null, null, null, e.button);
    }

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {props.menuItems.map((el, i) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            data={el}
                            onMouseEnter={() => handleMouseEnterSidebarItem(el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveSidebarItem(el)}
                            showOptions={showOptions}
                            onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                            onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                            itemOnClick={(opt, path, pathOfIds, e) => itemOnClick(opt, path, pathOfIds, e)}
                        />
                    )
            })}</div>
        )
    }
    
    const renderClassName = (state) => {
       switch(state){
            case 'init':
                return "sidebar";
            case 'open':
                return "sidebar-open";  
            case 'close':
                return "sidebar-close";
       }
    }
    
    /**
     * Markup
     */

    return(
        <div className={renderClassName(props.sidebarState)}>
            <div 
                className="sidebar-logo"
                onMouseDown={(e) => props.logoOnClick(e)}
            >
                crypto.
            </div>
            {renderSidebarItems()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state)
        };
    },
    (dispatch) => {
        return {
            setIsHoveringMenuItem: bindActionCreators(Actions.setIsHoveringMenuItem, dispatch),
            setIsHoveringToolbarOptionItem: bindActionCreators(Actions.setIsHoveringToolbarOptionItem, dispatch),
            setIsHoveringToolbarSubOptionItem: bindActionCreators(Actions.setIsHoveringToolbarSubOptionItem, dispatch),
            setActivityOfToolbarOptionItem: bindActionCreators(Actions.setActivityOfToolbarOptionItem, dispatch),
            setActivityOfToolbarSubOptionItem: bindActionCreators(Actions.setActivityOfToolbarSubOptionItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            setSidebarState: bindActionCreators(Actions.setSidebarState, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setHistoryPopFromPortfolioItem: bindActionCreators(Actions.setHistoryPopFromPortfolioItem, dispatch)
        };
    }
)(withRouter(Sidebar));
 