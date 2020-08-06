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
* Components
*/

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';
// import SocialMediaIcon from '../../SmallParts/SocialMediaIcon/socialMediaIcon';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './sidebar.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

// import MyLogo from '../../../images/FinalLogo.png';
// import MyLogoCafe from '../../../images/myLogoCafe.png';
// import MyLogoCrypto from '../../../images/cryptoLogoText.png';

/**
* Constants
*/

import {
    menuItemsArray
} from '../../../constants/menuItems';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

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
        // props.initMenuItems(menuItemsArray);
    }, [])

    const sidebarOnClick = (path, id) => {
        // props.history.push(props.match.url + (path === "" ? path : `/${path}`));
        // props.activateMenuItem(id);
    }

    const handleMouseEnterSidebarItem = (data, id) => {
        props.setIsHoveringMenuItem("on", id);
        setShowOptions(true);
    }

    const handleMouseLeaveSidebarItem = (data) => {
        props.setIsHoveringMenuItem("off");
        setShowOptions(false);
    }

    const itemOnClick = (opt, path, pathOfIds) => {
        console.log(path, pathOfIds)
        // props.history.push(props.match.url + (path === "" ? path : `/${path}`));
        props.clearActivityOfMenuItems();
        switch(opt){
            case 'optionItem': 
                props.setActivityOfToolbarOptionItem(pathOfIds);
                return;
            case 'subOptionItem': 
                props.setActivityOfToolbarSubOptionItem(pathOfIds);
                return;
        }

       
    }

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {props.menuItems.map((el) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            data={el}
                            onMouseEnter={() => handleMouseEnterSidebarItem(el, el.id)} 
                            onMouseLeave={() => handleMouseLeaveSidebarItem(el)}
                            showOptions={showOptions}
                            onMouseEnterAndLeaveOptionItem={props.setIsHoveringToolbarOptionItem} 
                            onMouseEnterAndLeaveSubOptionItem={props.setIsHoveringToolbarSubOptionItem}
                            itemOnClick={(opt, path, pathOfIds) => itemOnClick(opt, path, pathOfIds)}
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
            <div className="sidebar-logo">crypto.</div>
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
        };
    }
)(withRouter(Sidebar));
 