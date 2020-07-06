/**
* Libraries
*/

import React, {
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './section1DataItem.scss';

/**
* Utility
*/

import {
    H3,
    H4
} from '../../UtilityComponents';

/**
* Section1DataItem component definition and export
*/

export const Section1DataItem = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const arrowOnClick = (path) => {
        props.history.push(props.match.url + (path === "" ? path : `/${path}`))
    }

    /**
    * Markup
    */

    return(
        <div className="section-1-data-item">
            <H3>{props.header}</H3>
            <H4 className="h4-opacity">{props.text}</H4>
            <CSSTransition
                in={isHovering} 
                timeout={7000}
                // mountOnEnter
                // unmountOnExit
                classNames={{
                    enter: ``,
                    enterActive: `arrow-wrapper-lengthen`,
                    exit: ``,
                    exitActive: `arrow-wrapper-shorten`,
                }}
            > 
                <div 
                    className="arrow-wrapper"
                    onMouseLeave={handleMouseLeave} 
                    onMouseEnter={handleMouseEnter} 
                    onClick={() => arrowOnClick(props.path)}
                >
                    <div className="arrow-horizontal-line"></div>
                    <div className="arrow-wrapper2">
                        <div className="arrow-top-line"></div>
                        <div className="arrow-bottom-line"></div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default withRouter(Section1DataItem);
 