/**
 * Libraries
 */

import React, {
    useEffect,
    useState
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
 * Styles
 */

import './icon.scss';

/**
 * Icons
 */

import { 
    faInstagramSquare,
    faTwitter,
    faFacebookF,
    faTumblr
} from '@fortawesome/free-brands-svg-icons';

import {
    faCheck,
    faMinus,
    faPen,
    faPaperclip,
    faLaptop,
    faCoffee
} from '@fortawesome/free-solid-svg-icons';

/**
 * Icon component definition and export
 */

export const Icon = (props) => {

    /**
     * State
     */
 
    const [socMedIsHover, setSocMedIsHover] = useState("init");

    /**
     * Methods
     */

    useEffect(() => {
    }, []);
    
    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'socMedIcon':
                setSocMedIsHover("on")
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'socMedIcon':
                setSocMedIsHover("off")
                break;
        }
    }

    const renderClassName = (opt, isHovering, isActive) => {
        if(opt === "plusIcon" && !props.hoverEffect){
            return "plus-icon";
        }
        if(opt === "plusIcon" && props.hoverEffect){
            if(isActive === "on"){
                return "plus-icon-hover-on";
            }
            switch(isHovering){
                case 'init':
                    return "plus-icon";
                case 'on':
                    return "plus-icon-hover-on";
                case 'off':
                    return "plus-icon-hover-off"
            }
        }
        if(opt === "socMedIcon"){
            switch(isHovering){
                case 'init':
                    return "soc-med-icon";
                case 'on':
                    return "soc-med-icon-hover-on";
                case 'off':
                    return "soc-med-icon-hover-off"
            }
        }
        if(opt === "section1ListsPage") return "icon-for-lists-page-section-1"
        if(opt === "section2ListsPage") return "icon-for-lists-page-section-2"
    }

    const iconOnClick = (e, iconName, instaName) => {
        switch(e.button){
            case 0:
                // Open social media on left mouse click
            case 1:
                // Open social media in a new window on scroll wheel click

                if(iconName === "Instagram"){
                    return window.open(`https://www.instagram.com/${instaName}`);
                }
                if(iconName === "Twitter"){
                    return window.open(`https://www.twitter.com`);
                }
                if(iconName === "Facebook"){
                    return window.open(`https://www.facebook.com`);
                }
                if(iconName === "Tumblr"){
                    return window.open(`https://www.tumblr.com`);
                }
            case 2:
                // Do nothing on right mouse click
                return;
        }
    }

    const setIconName = (opt) => {
        switch(opt){
            case 'faInstagramSquare':
                return faInstagramSquare;
            case 'faTwitter':
                return faTwitter;
            case 'faFacebookF':
                return faFacebookF;
            case 'faTumblr':
                return faTumblr;
            case 'faCheck':
                return faCheck;
            case 'faMinus':
                return faMinus;
            case 'faPen':
                return faPen;
            case 'faPaperclip':
                return faPaperclip;
            case 'faLaptop':
                return faLaptop;
            case 'faCoffee':
                return faCoffee;
        }
    }

    const renderIcon = (iconType) => {
        if(iconType === "plusIcon"){
            return(
                <div className={renderClassName(iconType, props.isHover, props.isActive)}>
                    <div className="plus-horizontal-line"/>
                    <div className="plus-vertical-line"/>
                </div>
            )
        }
        if(iconType === "fontAwesome"){
            return(
                <FontAwesomeIcon 
                    icon={setIconName(props.icon)} 
                    size={props.iconSize}
                    className={renderClassName(props.classNameOpt, socMedIsHover)}
                    onMouseEnter={props.onMouseEnter ? () => handleMouseEnter(props.classNameOpt) : null} 
                    onMouseLeave={props.onMouseLeave ? () => handleMouseLeave(props.classNameOpt): null}
                    onMouseDown={props.onMouseDown ? (e) => iconOnClick(e, props.iconName, props.instaName): null}
                />
            )
        }
    }

    /**
     * Markup
     */

    return(
        <>
            {renderIcon(props.iconType)}
        </>
    );
}

export default Icon;
