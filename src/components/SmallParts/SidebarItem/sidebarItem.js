/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './sidebarItem.scss';

/**
* Utility
*/

import {
    EH40,
    EH20,
    EH10,
    H19,
    H15,
    EW2
 } from '../../UtilityComponents';

/**
* SidebarItem component definition and export
*/

export const SidebarItem = (props) => {
    
    /**
    * State
    */

    // const [isHovering, setIsHovering] = useState(false);
    
    /**
    * Methods
    */

    // const itemOnClick = (opt, path, pathOfIds) => {
    //     switch(opt){
    //         case 'optionItem': 
    //             props.setActivityOfToolbarOptionItem(pathOfIds);
    //             return;
    //         case 'subOptionItem': 
    //             props.setActivityOfToolbarOptionItem(pathOfIds);
    //             return;
    //     }
    //     console.log(path, pathOfIds)
    //     // props.history.push(props.match.url + (path === "" ? path : `/${path}`));
       
    // }

    const renderClassName = (opt, isHovering, active) => {
        if(opt === "sidebarArrow"){
            // if(active){
            //     return "sidebar-item-arrow-wrapper";
            // }
            switch(isHovering){
                case 'init':
                    return "sidebar-item-arrow-wrapper";
                case 'on':
                    return "sidebar-item-arrow-wrapper-hover-on";
                case 'off':
                    return "sidebar-item-arrow-wrapper-hover-off";
            }
        }
        if(opt === "arrow"){
            switch(isHovering){
                case 'init':
                    return "arrow-wrapper-hide";
                case 'on':
                    return "arrow-wrapper-hover-on";
                case 'off':
                    return "arrow-wrapper-hover-off";
            }
        }
        if(opt === "text"){
            if(active){
                return "sidebar-option-item-text-active";
            }
            switch(isHovering){
                case 'init':
                    return "sidebar-option-item-text";
                case 'on':
                    return "sidebar-option-item-text-hover-on";
                case 'off':
                    return "sidebar-option-item-text-hover-off";
            }
        }
    }

    const renderOptions = () => {
        return(
            <div className="sidebar-item-options-wrapper">{props.data.options.map((el, i) => {
                return(
                        <div 
                            key={i} 
                            className="sidebar-option"
                        >
                            <div className="sidebar-option-header-text">
                                <H19 className="h19-matterhorn-teko">{el.header}</H19>
                            </div>
                            {renderOptionItems(el)}
                        </div>
                )
            })}</div>
        )
    }

    const renderOptionItems = (obj) => {
        return(
            <>{obj.array.map((el, i) => {
                let pathOfIds = [obj.id, el.id];
                if(el.subOptions.length === 0){
                    return(
                        <div 
                            key={i} 
                            className="sidebar-option-item"
                            // onClick={() => props.itemOnClick("optionItem", el.path, pathOfIds)}
                        >
                            {el.active ? 
                            <div className="arrow-wrapper-active">
                                <div className="arrow-horizontal-line"></div>
                                <div className="arrow-wrapper2">
                                    <div className="arrow-top-line"></div>
                                    <div className="arrow-bottom-line"></div>
                                </div>
                            </div> : null}
                            {!el.active ? 
                            <div className={renderClassName("arrow", el.isHover)}>
                                <div className="arrow-horizontal-line"></div>
                                <div className="arrow-wrapper2">
                                    <div className="arrow-top-line"></div>
                                    <div className="arrow-bottom-line"></div>
                                </div>
                            </div> : null}
                            <div 
                                className={renderClassName("text", el.isHover, el.active)}
                                onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)} 
                                onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                            >
                                {/* <div className={renderClassName("text", el.isHover)}> */}
                                    <H15 className="h15-black-lustria">{el.text}</H15>
                                {/* </div> */}
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div 
                            key={i} 
                            className="sidebar-option-item-with-sub-option"
                            onMouseEnter={() => props.onMouseEnterAndLeaveOptionItem("on", pathOfIds)}
                            onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                        >
                            <div className="item-wrapper">
                                <H15 className="h15-black-lustria">{el.text}</H15>
                                <div className={renderClassName("sidebarArrow", el.isHover, el.active)}>
                                    <div className="sidebar-item-arrow-top-line"/>
                                    <div className="sidebar-item-arrow-bottom-line"/>
                                </div>
                            </div>
                           
                            {el.isHover === "on" ? renderSubOptions(el.subOptions, pathOfIds): null}
                        </div>
                    )
                }
            })}</>
        )
    }

    const renderSubOptions = (subOptions, pathOfIds) => {
        return(
            <>
                <EH10/>
                <div className="grey-line"/>
                <div 
                    className="sidebar-item-sub-options"
                    onMouseLeave={() => props.onMouseEnterAndLeaveOptionItem("off", pathOfIds)}
                >
                    <EH20/>
                    {subOptions.map((el, i) => {
                        let updatedPathOfIds = [...pathOfIds];
                        updatedPathOfIds.push(el.id);
                        return(
                            <div 
                                key={i} 
                                className="sidebar-sub-option-item"
                                // onClick={() => props.itemOnClick("subOptionItem", el.path, updatedPathOfIds)}
                            >
                                {el.active ? 
                                <div className="arrow-wrapper-active">
                                    <div className="arrow-horizontal-line"></div>
                                    <div className="arrow-wrapper2">
                                        <div className="arrow-top-line"></div>
                                        <div className="arrow-bottom-line"></div>
                                    </div>
                                </div> : null}
                                {!el.active ? 
                                <div className={renderClassName("arrow", el.isHover)}>
                                    <div className="arrow-horizontal-line"></div>
                                    <div className="arrow-wrapper2">
                                        <div className="arrow-top-line"></div>
                                        <div className="arrow-bottom-line"></div>
                                    </div>
                                </div> : null}       
                                <div 
                                    className={renderClassName("text", el.isHover, el.active)}
                                    onMouseEnter={() => props.onMouseEnterAndLeaveSubOptionItem("on", updatedPathOfIds)} 
                                    onMouseLeave={() => props.onMouseEnterAndLeaveSubOptionItem("off", updatedPathOfIds)}
                                >
                                    <H15 className="h15-black-lustria">{el.text}</H15>
                                </div>
                                                
                            </div>
                        )})}
                    {/* <EH20/> */}
                </div>
            </>
        )
    }

    /**
    * Markup
    */

    return(
     
        <div 
            className="sidebar-item-wrapper"
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
           >
            <div className={props.data.active ? `sidebar-item-active` : `sidebar-item`}>
                <div className="item-wrapper">
                    {props.data.text}
                    <div className={renderClassName("sidebarArrow", props.data.isHover, props.data.active)}>
                        <div className="sidebar-item-arrow-top-line"/>
                        <div className="sidebar-item-arrow-bottom-line"/>
                    </div>
                </div>
                
            </div>
            {props.showOptions && props.data.isHover === "on" ? 
            <div 
                className="sidebar-item-options"
                onMouseLeave={props.onMouseLeave}
            >
                <div className="grey-line"/>
                {/* <EH20/> */}
                {renderOptions()}
                <EH20/>
            </div> : null}
        </div>
    );
}
 
export default SidebarItem;
 