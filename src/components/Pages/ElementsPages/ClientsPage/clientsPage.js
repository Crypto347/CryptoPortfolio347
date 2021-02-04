/**
 * Libraries
 */

import React, {
    useState,
    useEffect
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

/**
 * Styles
 */

import './clientsPage.scss';

/**
 * Components
 */

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import Swiper from '../../../../library/Swiper/swiper';
import Footer from '../../../Parts/Footer/footer';
import BackToTop from '../../../SmallParts/BackToTop/backToTop';

/**
 * Actions
 */

import * as Actions from '../../../../actions';

/**
 * Services
 */

import * as Services from "../../../../service";

/**
 * Selectors
 */

import * as Selectors from '../../../../reducers/selectors';

/**
 * Utility
 */

import { 
    H15,
    H45,
    EH90
} from '../../../UtilityComponents';

/**
 * Hooks
 */

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
 * Images
 */

 import * as Images from '../../../../constants/images';
/**
 * ClientsPage component definition and export
 */

export const ClientsPage = (props) => {

    /**
     * State
     */

    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    
    /**
     * Methods
     */

    useEffect(() => {
        // Init state for fading effect when component will unmount

        props.setUnmountComponentValues(false, "");

        // Fetch data for the component

        if(props.clientsPage.section1Data.swiper1.items.length === 0){
            props.fetchClientsPageSection1Swiper1Data();
        }
        if(props.clientsPage.section1Data.swiper2.items.length === 0){
            props.fetchClientsPageSection1Swiper2Data();
        }
        if(props.clientsPage.section2Data.swiper1.items.length === 0){
            props.fetchClientsPageSection2Swiper1Data();
        }
        if(props.clientsPage.section2Data.swiper2.items.length === 0){
            props.fetchClientsPageSection2Swiper2Data();
        }

        // Scroll to the top of the screen

        window.scrollTo(0, 0);
    
        // Event Listeners

        window.addEventListener('wheel', handleOnWheel);

        return () => {
            // Cleaning the unmounted component

            window.removeEventListener('wheel', handleOnWheel);
            props.setMenuDotsState("init", "");
            props.setShowBackToTopComponent(false);
        }
    }, []);

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("clientsPage");

        // Show or hide BackToTop component

        if(scrollHeight > screen.height/2){
            props.setShowBackToTopComponent(true);
        }else{
            props.setShowBackToTopComponent(false);
        }
    
        // Check scroll direction

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    const renderToolbars = () => {
        if(size.width < 1120){
            return(
                <>
                    <Toolbar 
                        style="smallScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="clientsPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="clientsPage"
                    />
                </>
            )
        }else{
            return(
                <>
                    <Toolbar 
                        style="regularScreenAnimated" 
                        scrollingUp={scrollingUp}
                        toolbarMainColor="white"
                        page="clientsPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="clientsPage"
                    />
                </>
            )
        }
    }

    const renderClassName = (opt, section) => {
        if(opt === "sectionWrapper"){
            switch(section){
                case 'section1':
                    return "clients-page-section1-wrapper";
                case 'section2':
                    return "clients-page-section2-wrapper";
            }
        }
       
    }
    
    const renderBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'rgb(239, 239, 239)';
            case 'section2':
                return 'black';
            default:
                return 'white';
        }
    }
    
    const renderLoadingBackgroundColor = (section) => {
        switch(section) {
            case 'section1':
                return 'black';
            case 'section2':
            default:
                return 'white';
        }
    }

    const renderSwiperWidth = (size) => {
        if(size <= 1410){
            return 80;
        }else{
            return 260;
        }
    }

    const renderClientsPageSwiperData = (section, swiper, arr) => {
        let paddingLeftRight = renderSwiperWidth(size.width);
        console.log(paddingLeftRight)
        if(section === "section1"){
            switch(swiper) {
                case 'swiper1':
                    return(
                        <Swiper
                            component="clientsPageSection1Swiper1"
                            contentArray={arr.items}
                            content={arr}
                            translateWidth={(size.width-paddingLeftRight)/5}
                            showNumbersOfSlides={5}
                            setSwiperState={props.setSwiperStateForClientsPageSection1Swiper1}
                            swiperData={arr.swiper}
                            onlyImages
                            // autoPlay
                        />
                    );
                case 'swiper2':
                    return(
                        <Swiper
                            component="clientsPageSection1Swiper2"
                            contentArray={arr.items}
                            content={arr}
                            translateWidth={(size.width-paddingLeftRight)/5}
                            showNumbersOfSlides={5}
                            setSwiperState={props.setSwiperStateForClientsPageSection1Swiper2}
                            swiperData={arr.swiper}
                            onlyImages
                            // autoPlay
                        />
                    )
            }
        }
        if(section === "section2"){
            switch(swiper) {
                case 'swiper1':
                    return(
                        <Swiper
                            component="clientsPageSection2Swiper1"
                            contentArray={arr.items}
                            content={arr}
                            translateWidth={(size.width-paddingLeftRight)/5}
                            showNumbersOfSlides={5}
                            setSwiperState={props.setSwiperStateForClientsPageSection2Swiper1}
                            swiperData={arr.swiper}
                            onlyImages
                            // autoPlay
                        />
                    );
                case 'swiper2':
                    return(
                        <Swiper
                            component="clientsPageSection2Swiper2"
                            contentArray={arr.items}
                            content={arr}
                            translateWidth={(size.width-paddingLeftRight)/5}
                            showNumbersOfSlides={5}
                            setSwiperState={props.setSwiperStateForClientsPageSection2Swiper2}
                            swiperData={arr.swiper}
                            onlyImages
                            // autoPlay
                        />
                    )
            }
        }
    }

    const renderCountdownDataSectionContent = (section, swiper, arr) => {
        if(arr.loading && !arr.error){
            return(
                <div 
                    className="clients-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <Loading color={renderLoadingBackgroundColor(section)}/>
                </div>
            )
        }
        if(!arr.loading && !arr.error){
            return(
                <>
                    {renderClientsPageSwiperData(section, swiper, arr)}
                </>
            );
        }
        if(!arr.loading && arr.error){
            return(
                <div 
                    className="clients-page-loading-error" 
                    style={{
                        height: `${size.height/2}px`,
                        background: `${renderBackgroundColor(section)}`
                    }}
                >
                    <H15 className="h19-nobel-lora">{`${arr.error}`}</H15>
                </div>
            )
        }
    }

    const renderCountdownPageDataContent = (section, obj) => {
        return(
            <div className={renderClassName("sectionWrapper",section)}>
                {renderCountdownDataSectionContent(section, "swiper1", obj.swiper1)}
                <EH90/>
                {renderCountdownDataSectionContent(section, "swiper2", obj.swiper2)}
            </div>
        )
    } 

    /**
     * Markup
     */

    return(
        <div className="clients-page" id="clientsPage">
            {renderToolbars()}
            <div className="clients-page-wrapper">
                <div className="clients-page-header">
                    <H45 className="h45-nero-lustria">Clients</H45>
                </div>
                <div className="grey-line"/>
                {renderCountdownPageDataContent("section1", props.clientsPage.section1Data)}
                {renderCountdownPageDataContent("section2", props.clientsPage.section2Data)}
            </div>
            <Footer/>
            {props.showBackToTop ? <BackToTop/> : null}
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            clientsPage: Selectors.getClientsPageState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
            showBackToTop: Selectors.getShowBackToTopState(state),
        };
    },
    (dispatch) => {
        return {
            fetchClientsPageSection1Swiper1Data: bindActionCreators(Services.fetchClientsPageSection1Swiper1Data, dispatch),
            fetchClientsPageSection1Swiper2Data: bindActionCreators(Services.fetchClientsPageSection1Swiper2Data, dispatch),
            fetchClientsPageSection2Swiper1Data: bindActionCreators(Services.fetchClientsPageSection2Swiper1Data, dispatch),
            fetchClientsPageSection2Swiper2Data: bindActionCreators(Services.fetchClientsPageSection2Swiper2Data, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            setShowBackToTopComponent: bindActionCreators(Actions.setShowBackToTopComponent, dispatch),
            setSwiperStateForClientsPageSection1Swiper1: bindActionCreators(Actions.setSwiperStateForClientsPageSection1Swiper1, dispatch),
            setSwiperStateForClientsPageSection1Swiper2: bindActionCreators(Actions.setSwiperStateForClientsPageSection1Swiper2, dispatch),
            setSwiperStateForClientsPageSection2Swiper1: bindActionCreators(Actions.setSwiperStateForClientsPageSection2Swiper1, dispatch),
            setSwiperStateForClientsPageSection2Swiper2: bindActionCreators(Actions.setSwiperStateForClientsPageSection2Swiper2, dispatch),
        };
    }
)(ClientsPage);
 