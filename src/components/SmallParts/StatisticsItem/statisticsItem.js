/**
* Libraries
*/

import React, {
    useState, 
    useEffect,
    useRef
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

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

import './statisticsItem.scss';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Utility
*/

import {
    H25,
    H15,
    EH10,
    EH20
} from '../../UtilityComponents';

/**
* StatisticsItem component definition and export
*/

export const StatisticsItem = (props) => {

    /**
    * State
    */

    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(10);
    const [showPercent, setShowPercent] = useState(false);

    /**
    * Methods
    */
   
    useEffect(() => {
        // let timer = setTimeout(() => {
        //     setShowPercent(true);
        // }, 500);

        // return () => clearTimeout(timer);
    }, []);

    useInterval(() => {
        setValue(value + 1);
    }, value === props.percent ? null : delay)

    /**
    * Markup
    */

    return(
        <div 
            className="statistics-item"
        >
            <div 
                className="statistics-item-wrapper"
                style={{width: `${props.percent}%`}}
            >
                <H25 className="h25-black-teko">{props.label}</H25>
                <div className="statistics-item-percent">{`${value}%`}</div>
            </div>
            <div className="statistics-item-percent-line-wrapper">
                <div className="statistics-item-percent-line-back"/>
                <div 
                    className="statistics-item-percent-line-top"
                    style={{width: `${props.percent}%`}}
                />
            </div>
            <EH10/>
            <EH20/>
        </div>
    );
}

export default StatisticsItem;
 