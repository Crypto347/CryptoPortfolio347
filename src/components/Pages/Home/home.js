/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './home.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import HeaderImages from '../../SmallParts/HeaderImages/headerImages';
import Section1 from '../../Parts/Section1/section1';

/**
* Images
*/

import Image1 from '../../../images/headerImages/annie-spratt-QckxruozjRg-unsplash.jpg';

/**
* Home component definition and export
*/

export const Home = () => {

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <div className="home">
            <div className="home-main-background">
                <div className="home-curtain"/>
                <Toolbar/>
                <HeaderImages/>
                {/* <img src={Image1}/> */}
            </div>
            <Section1/>
        </div>
    );
}

export default Home;
 