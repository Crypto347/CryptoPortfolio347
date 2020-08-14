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

/**
* Styles
*/

import './footer.scss';

/**
* Components
*/

// import Loading from '../../SmallParts/Loading/loading';
// import Section1DateItem from '../../SmallParts/Section1DateItem/section1DataItem';

/**
* Services
*/

import * as Services from "../../../service";

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H15,
    H17,
    H22,
    H40,
    EH20,
    EH30,
    EH90
} from '../../UtilityComponents';

/**
* Images
*/

import Map from '../../../images/addition/footer-img-1-300x156.png'

/**
* Footer component definition and export
*/

export const Footer = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
      
    }, []);

    /**
    * Markup
    */

    return(
        <div className="footer">
            <div className="footer-info">
                <EH90/>
                <div className="footer-info-wrapper">
                    <div className="footer-info-section">
                        <H40 className="h40-white-balsamiq">crypto.</H40>
                        <EH20/>
                        <H17 className="h17-nobel-lustria">Mei no docendi quem munere sea sanctus sed at, sint primis utroque, duo pri cu mel velit.</H17>
                    </div>
                    <div className="footer-info-section">
                        <H22 className="h22-white-poppins">Contact</H22>
                        <EH20/>
                        <H17 className="h17-nobel-lustria">New York 620 Eighth Avenue</H17>
                        <H17 className="h17-nobel-lustria">office@agencyname.com</H17>
                        <H17 className="h17-nobel-lustria">office@youremail.com</H17>
                        <H17 className="h17-nobel-lustria">Phone : +1 986 777 3776</H17>
                        <H17 className="h17-nobel-lustria">Phone : +1 776 888 3644</H17>
                    </div>
                    <div className="footer-info-section">
                        <H22 className="h22-white-poppins">Twitter Feed</H22>
                        <EH20/>
                        <H17 className="h17-nobel-lustria">@RobWattCT Hi there, thank you for writing in and choosing our themes! We don’t have precise dates, but since we ar…</H17>
                        <H17 className="h17-nobel-lustria">https://t.co/70En9g7CzX</H17>
                        <H17 className="h17-nobel-lustria">3 months ago</H17>
                    </div>
                    <div className="footer-info-section">
                        <H22 className="h22-white-poppins">Our Offices</H22>
                        <EH20/>
                        <div className="footer-info-map">
                            <img src={Map}/>
                        </div>
                    </div>
                </div>
                <EH90/>
            </div>
            <div className="footer-copyright">
                <EH30/>
                <H15 className="h15-nobel-lustria">Copyright Elated Themes All Rights Reserved</H15>
                <EH30/>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // section1Data: Selectors.getSection1DateState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch)
        };
    }
)(Footer);
 