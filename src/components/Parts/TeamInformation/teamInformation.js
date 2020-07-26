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

import './teamInformation.scss';

/**
* Components
*/

import Loading from '../../SmallParts/Loading/loading';
import TeamInformationCard from '../../SmallParts/TeamInformationCard/teamInformationCard';

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
    H19,
    EH90,
    EH25
} from '../../UtilityComponents';

/**
* Images
*/

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';



/**
* Constants
*/


/**
* TeamInformation component definition and export
*/

export const TeamInformation = (props) => {

    /**
    * State
    */

   const size = useWindowSize();

    /**
    * Methods
    */

    useEffect(() => {
        props.fetchTeamInformation();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    
    const renderTeamInformation = () => {
        if(props.teamInformation.loading && !props.teamInformation.error){
            return(
                <div className="team-information-loading-error">
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.teamInformation.loading && !props.teamInformation.error){
            return(
                <div className="team-information-items">{props.teamInformation.items.map((el, i) => {
                    return(
                        <TeamInformationCard
                            photo={el.photo}
                            key={i}
                            name={el.name}
                            position={el.position}
                            instaName={el.instaName}
                        />
                    )})}
                </div>
            )
        }
        if(!props.teamInformation.loading && props.teamInformation.error){
            return(
                <div className="team-information-loading-error">
                    <H19 className="h19-nobel-lora">{`${props.teamInformation.error}`}</H19>
                </div>
            )
        }
    } 

    /**
    * Markup
    */

    return(
        <div className="team-information">
            {renderTeamInformation()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            teamInformation: Selectors.getTeamInformationState(state),
            // ourProcessDate: Selectors.getOurProcessDataState(state)
        };
    },
    (dispatch) => {
        return {
            fetchTeamInformation: bindActionCreators(Services.fetchTeamInformation, dispatch),
          
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch)
        };
    }
)(TeamInformation);
 