/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Styles
*/

import './achievements.scss';

/**
* Components
*/

import AchievementItem from '../../SmallParts/AchievementItem/achievementItem';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Utility
*/

import {
    H65,
    H25,
    EH70,
    EW3
} from '../../UtilityComponents';

/**
* Images
*/

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Constants
*/


/**
* Achievements component definition and export
*/

export const Achievements = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [showComponent, setShowComponent] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchAchievementsData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("achievements");
        if(scrollHeight >=el.offsetTop - window.innerHeight/2 - 400){
            setShowComponent(true);
        }
        if(size.width - size.height < 0){
            if(scrollHeight >= el.offsetTop - size.height/2 - 900){
                setShowComponent(true);
            }
        }
    }

    const renderAchievementsData = () => {
        if(!props.achievementsData.loading && !props.achievementsData.error){
            return(
                <div className="achievements-data-items">{props.achievementsData.items.map((el,i) => {
                    return(
                        <AchievementItem
                            key={i}
                            number={el.number}
                            achievement={el.achievement}
                        />
                    )
                })}</div>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <div 
            className="achievements"
            id="achievements"
        >
            {showComponent ? renderAchievementsData() : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            achievementsData: Selectors.getAchievementsDataState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchAchievementsData: bindActionCreators(Services.fetchAchievementsData, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(Achievements);
 