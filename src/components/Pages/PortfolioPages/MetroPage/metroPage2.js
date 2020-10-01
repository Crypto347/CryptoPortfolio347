/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
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

import './metroPage2.scss';

/**
* Components
*/

import Loading from '../../../SmallParts/Loading/loading';
import Toolbar from '../../../Parts/Toolbar/toolbar';
import MetroItem from '../../../SmallParts/MetroItem/metroItem';
import Footer from '../../../Parts/Footer/footer';

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
    H19,
    H65,
    H70,
    EH10,
    EH30,
    EH40,
    EH70,
    EH110
} from '../../../UtilityComponents';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../../Hooks/useWindowSize';

/**
* MetroPage2 component definition and export
*/

export const MetroPage2 = (props) => {

    /**
    * State
    */

    const resizeRef = useRef();
    const transitionRef = useRef();
    const size = useWindowSize();
    const [scrollingUp, setScrollingUp] = useState(false);
    const [prevScreenWidthVal, setPrevScreenWidthVal] = useState(0);
    const [classNameImg1, setClassNameImg1] = useState('metro-page-item-id1');
    const [classNameImg2, setClassNameImg2] = useState('metro-page-item-id2');
    const [classNameImg3, setClassNameImg3] = useState('metro-page-item-id3');
    const [classNameImg4, setClassNameImg4] = useState('metro-page-item-id4');
    const [classNameImg5, setClassNameImg5] = useState('metro-page-item-id5');
    const [classNameImg6, setClassNameImg6] = useState('metro-page-item-id6');
    const [classNameImg7, setClassNameImg7] = useState('metro-page-item-id7');
    const [classNameImg8, setClassNameImg8] = useState('metro-page-item-id8');
    const [classNameImg9, setClassNameImg9] = useState('metro-page-item-id9');
    const [classNameImg10, setClassNameImg10] = useState('metro-page-item-id10');
    const [classNameImg11, setClassNameImg11] = useState('metro-page-item-id11');

    /**
    * Methods
    */

    useEffect(() => {
        props.setUnmountComponentValues(false, "");
        if(props.metroPage.items.length === 0){
            props.fetchMetroPage();
        }
        let timeout = setTimeout(() => {
            if(!props.metroPage.loading && !props.metroPage.error && props.historyPopFromItem !== "scrollToTop"){
                let itemOffsetTop = document.getElementById(props.historyPopFromItem) ? document.getElementById(props.historyPopFromItem).offsetTop : 0;
                window.scrollTo(0, itemOffsetTop - 30);
            }else{
                window.scrollTo(0, 0);
            }
        }, 2);

        const smooth = e => {
          
            // if(e.target.className.includes("metro-page-item-id5")){
            //     console.log("fagr")
            //         transitionRef.current()
            // }
            if(['metro-page-item-id1',
                'metro-page-item-id2',
                'metro-page-item-id3',
                'metro-page-item-id4',
                'metro-page-item-id5',
                'metro-page-item-id6',
                'metro-page-item-id7',
                'metro-page-item-id8',
                'metro-page-item-id9',
                'metro-page-item-id10',
                'metro-page-item-id11'
                ].includes(e.target.className)){
                    console.log("fagr")
                        transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current();
        }
 
        let stoneWallWidePageItemsWidth = document.getElementById('metroPageItems')?.clientWidth;
        props.updateItemsStyleValues("img1",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: 0,
            translateY: 0,
            transition: 0.45
        })
        props.updateItemsStyleValues("img2",{
            width: (stoneWallWidePageItemsWidth - 120)/5*2,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5 + 40,
            translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
            transition: 0.45
        })
        props.updateItemsStyleValues("img3",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
            translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
            transition: 0.45
        })
        props.updateItemsStyleValues("img4",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*4 + 120,
            translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
            transition: 0.45
        })
        props.updateItemsStyleValues("img5",{
            width: (stoneWallWidePageItemsWidth - 120)/5*2,
            height: 0,
            translateX: 0,
            translateY: 10,
            transition: 0.45
        })
        props.updateItemsStyleValues("img6",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
            translateY: 10,
            transition: 0.45
        })
        props.updateItemsStyleValues("img7",{
            width: (stoneWallWidePageItemsWidth - 120)/5*2  + 40,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
            translateY: 10,
            transition: 0.45
        })
        props.updateItemsStyleValues("img8",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
            translateY: (stoneWallWidePageItemsWidth - 120)/5 + 65,
            transition: 0.45
        })
        props.updateItemsStyleValues("img9",{
            width: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
            translateY: (stoneWallWidePageItemsWidth - 120)/5 + 65,
            transition: 0.45
        })
        props.updateItemsStyleValues("img10",{
            width: (stoneWallWidePageItemsWidth - 120)/5*2,
            height: 0,
            translateX: 0,
            translateY: (stoneWallWidePageItemsWidth - 120)/5*2 + 115,
            transition: 0.45
        })
        props.updateItemsStyleValues("img11",{
            width: (stoneWallWidePageItemsWidth - 120)/5,
            height: 0,
            translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
            translateY: (stoneWallWidePageItemsWidth - 120)/5*2 + 100,
            transition: 0.45
        })
     
        window.addEventListener('wheel', handleOnWheel);
        window.addEventListener('resize', resize);
        window.addEventListener('transitionend', smooth);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('wheel', handleOnWheel);
            window.removeEventListener('resize', resize);
            window.removeEventListener('transitionend', smooth);
            props.setMenuDotsState("init", "");
        }
    }, []);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        if(props.metroPage.itemsStyleValues.img1.transition === 0 ||
            props.metroPage.itemsStyleValues.img2.transition === 0 ||
            props.metroPage.itemsStyleValues.img3.transition === 0 ||
            props.metroPage.itemsStyleValues.img4.transition === 0 ||
            props.metroPage.itemsStyleValues.img5.transition === 0 ||
            props.metroPage.itemsStyleValues.img6.transition === 0 ||
            props.metroPage.itemsStyleValues.img7.transition === 0 ||
            props.metroPage.itemsStyleValues.img8.transition === 0 ||
            props.metroPage.itemsStyleValues.img9.transition === 0 ||
            props.metroPage.itemsStyleValues.img10.transition === 0 ||
            props.metroPage.itemsStyleValues.img11.transition === 0
            ) {           
            props.updateItemsStyleValues("img1",{
                ...props.metroPage.itemsStyleValues.img1,
                transition: 0.45
            })
            props.updateItemsStyleValues("img2",{
                ...props.metroPage.itemsStyleValues.img2,
                transition: 0.45
            })
            props.updateItemsStyleValues("img3",{
                ...props.metroPage.itemsStyleValues.img3,
                transition: 0.45
            })
            props.updateItemsStyleValues("img4",{
                ...props.metroPage.itemsStyleValues.img4,
                transition: 0.45
            })
            props.updateItemsStyleValues("img5",{
                ...props.metroPage.itemsStyleValues.img5,
                transition: 0.45
            })
            props.updateItemsStyleValues("img6",{
                ...props.metroPage.itemsStyleValues.img6,
                transition: 0.45
            })
            props.updateItemsStyleValues("img7",{
                ...props.metroPage.itemsStyleValues.img7,
                transition: 0.45
            })
            props.updateItemsStyleValues("img8",{
                ...props.metroPage.itemsStyleValues.img8,
                transition: 0.45
            })
            props.updateItemsStyleValues("img9",{
                ...props.metroPage.itemsStyleValues.img9,
                transition: 0.45
            })
            props.updateItemsStyleValues("img10",{
                ...props.metroPage.itemsStyleValues.img10,
                transition: 0.45
            })
            props.updateItemsStyleValues("img11",{
                ...props.metroPage.itemsStyleValues.img11,
                transition: 0.45
            })
        }
    }, [props.metroPage.itemsStyleValues.img1.transition,props.metroPage.itemsStyleValues.img2.transition,
        props.metroPage.itemsStyleValues.img3.transition,props.metroPage.itemsStyleValues.img4.transition,
        props.metroPage.itemsStyleValues.img5.transition,props.metroPage.itemsStyleValues.img6.transition,
        props.metroPage.itemsStyleValues.img7.transition,props.metroPage.itemsStyleValues.img8.transition,
        props.metroPage.itemsStyleValues.img9.transition,props.metroPage.itemsStyleValues.img10.transition,
        props.metroPage.itemsStyleValues.img11.transition])

    const smoothTransition = () => {
      console.log("Fired")
            props.updateItemsStyleValues("img1",{
                ...props.metroPage.itemsStyleValues.img1,
                transition: 0
            })
            props.updateItemsStyleValues("img2",{
                ...props.metroPage.itemsStyleValues.img2,
                transition: 0
            })
            props.updateItemsStyleValues("img3",{
                ...props.metroPage.itemsStyleValues.img3,
                transition: 0
            })
            props.updateItemsStyleValues("img4",{
                ...props.metroPage.itemsStyleValues.img4,
                transition: 0
            })
            props.updateItemsStyleValues("img5",{
                ...props.metroPage.itemsStyleValues.img5,
                transition: 0
            })
            props.updateItemsStyleValues("img6",{
                ...props.metroPage.itemsStyleValues.img6,
                transition: 0
            })
            props.updateItemsStyleValues("img7",{
                ...props.metroPage.itemsStyleValues.img7,
                transition: 0
            })
            props.updateItemsStyleValues("img8",{
                ...props.metroPage.itemsStyleValues.img8,
                transition: 0
            })
            props.updateItemsStyleValues("img9",{
                ...props.metroPage.itemsStyleValues.img9,
                transition: 0
            })
            props.updateItemsStyleValues("img10",{
                ...props.metroPage.itemsStyleValues.img10,
                transition: 0
            })
            props.updateItemsStyleValues("img11",{
                ...props.metroPage.itemsStyleValues.img11,
                transition: 0
            })
      
    }

    const handleResize = (e) => {
        let stoneWallWidePageItemsWidth = document.getElementById('metroPageItems').clientWidth;
        setPrevScreenWidthVal(size.width);
        if(size.width > 1500){
            props.updateItemsStyleValues("img1",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValues("img2",{
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5 + 40,
                translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img3",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
                translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img4",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*4 + 120,
                translateY: -(stoneWallWidePageItemsWidth - 120)/5 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img5",{
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            })
            props.updateItemsStyleValues("img6",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
                translateY: 10,
                transition: 0
            })
            props.updateItemsStyleValues("img7",{
                width: (stoneWallWidePageItemsWidth - 120)/5*2  + 40,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
                translateY: 10,
                transition: 0
            })
            props.updateItemsStyleValues("img8",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 120)/5 + 65,
                transition: 0
            })
            props.updateItemsStyleValues("img9",{
                width: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*3 + 80,
                translateY: (stoneWallWidePageItemsWidth - 120)/5 + 65,
                transition: 0
            })
            props.updateItemsStyleValues("img10",{
                width: (stoneWallWidePageItemsWidth - 120)/5*2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 120)/5*2 + 115,
                transition: 0
            })
            props.updateItemsStyleValues("img11",{
                width: (stoneWallWidePageItemsWidth - 120)/5,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 120)/5*2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 120)/5*2 + 100,
                transition: 0
            })
        }
        if(size.width <= 1500 && size.width > 1430){
            props.updateItemsStyleValues("img1",{
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValues("img2",{
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4 + 40,
                translateY: -(stoneWallWidePageItemsWidth - 80)/4 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img3",{
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4*3 + 80,
                translateY: -(stoneWallWidePageItemsWidth - 80)/4 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img4",{
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
                translateX: 0,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValues("img5",{
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 80)/4 + 70,
                transition: 0
            })
            props.updateItemsStyleValues("img6",{
                width: (stoneWallWidePageItemsWidth - 80)/4,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4*3 + 80,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValues("img7",{
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4 + 40,
                translateY: 20,
                transition: 0
            })
            props.updateItemsStyleValues("img8",{
                width: (stoneWallWidePageItemsWidth - 80)/4 - 15,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4*2 + 60,
                translateY: (stoneWallWidePageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
            props.updateItemsStyleValues("img9",{
                width: (stoneWallWidePageItemsWidth - 80)/4*2 + 20,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4*2 + 60,
                translateY: (stoneWallWidePageItemsWidth - 80)/4 + 70,
                transition: 0
            })
            props.updateItemsStyleValues("img10",{
                width: (stoneWallWidePageItemsWidth - 80)/4*2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
            props.updateItemsStyleValues("img11",{
                width: (stoneWallWidePageItemsWidth - 80)/4 - 15,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 80)/4*3 + 94,
                translateY: (stoneWallWidePageItemsWidth - 80)/4*3 + 180,
                transition: 0
            })
        }
        if(size.width <= 1430 && size.width > 1200){
            props.updateItemsStyleValues("img1",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValues("img2",{
                width: (stoneWallWidePageItemsWidth - 40)/3*2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/3 + 40,
                translateY: -(stoneWallWidePageItemsWidth - 40)/3 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img3",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/3*2 + 40,
                translateY: 30,
                transition: 0
            })
            props.updateItemsStyleValues("img4",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/3*2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 40)/3 + 100,
                transition: 0
            })
            props.updateItemsStyleValues("img5",{
                width: (stoneWallWidePageItemsWidth - 40)/3*2,
                height: 0,
                translateX: 0,
                translateY: 30,
                transition: 0
            })
            props.updateItemsStyleValues("img6",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/3*2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*2 + 165,
                transition: 0
            })
            props.updateItemsStyleValues("img7",{
                width: (stoneWallWidePageItemsWidth - 40)/3*2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*2 + 165,
                transition: 0
            })
            props.updateItemsStyleValues("img8",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*3 + 225,
                transition: 0
            })
            props.updateItemsStyleValues("img9",{
                width: (stoneWallWidePageItemsWidth - 40)/3*2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/3 + 40,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*3 + 225,
                transition: 0
            })
            props.updateItemsStyleValues("img10",{
                width: stoneWallWidePageItemsWidth,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*5 + 345,
                transition: 0
            })
            props.updateItemsStyleValues("img11",{
                width: (stoneWallWidePageItemsWidth - 40)/3,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/3*4 + 285,
                transition: 0
            })
        }

        if(size.width <= 1200 && size.width > 600){
            props.updateItemsStyleValues("img1",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: 0,
                transition: 0
            })
            props.updateItemsStyleValues("img2",{
                width: (stoneWallWidePageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: 10,
                transition: 0
            })
            props.updateItemsStyleValues("img3",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/2 + 40,
                translateY: -(stoneWallWidePageItemsWidth - 40)/2 - 30,
                transition: 0
            })
            props.updateItemsStyleValues("img4",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2 + 70,
                transition: 0
            })
            props.updateItemsStyleValues("img5",{
                width: (stoneWallWidePageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*3 + 150,
                transition: 0
            })
            props.updateItemsStyleValues("img6",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 40)/2 + 70,
                transition: 0
            })
            props.updateItemsStyleValues("img7",{
                width: (stoneWallWidePageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*2 + 110,
                transition: 0
            })
            props.updateItemsStyleValues("img8",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*8,
                transition: 0
            })
            props.updateItemsStyleValues("img9",{
                width: (stoneWallWidePageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*5 + 310,
                transition: 0
            })
            props.updateItemsStyleValues("img10",{
                width: (stoneWallWidePageItemsWidth - 40)/2*2 + 40,
                height: 0,
                translateX: 0,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*9 + 40,
                transition: 0
            })
            props.updateItemsStyleValues("img11",{
                width: (stoneWallWidePageItemsWidth - 40)/2,
                height: 0,
                translateX: (stoneWallWidePageItemsWidth - 40)/2 + 40,
                translateY: (stoneWallWidePageItemsWidth - 40)/2*8,
                transition: 0
            })
        }
    }

    const handleOnWheel = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("metroPage");
    
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
                        page="metroPage"
                    />
                    <Toolbar 
                        style="smallScreen"
                        toolbarMainColor="regular"
                        page="metroPage"
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
                        page="metroPage"
                    />
                    <Toolbar 
                        style="regularScreenWhite"
                        toolbarMainColor="white"
                        page="metroPage"
                    />
                </>
            )
        }
    }

    const renderMetroWidePageItemStyle = (id) => {
        // console.log(props.metroPage.itemsStyleValues.img2.width)
        switch(id){
            case 1:
                return {
                    width: `${props.metroPage.itemsStyleValues.img1.width}`,
                    // height: `${100/3}%`
                };
            case 2:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img2.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img2.translateX}px, ${props.metroPage.itemsStyleValues.img2.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img2.transition}s ease-out`,
                };
            case 3:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img3.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img2.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img3.translateX}px, ${props.metroPage.itemsStyleValues.img3.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img3.transition}s ease-out`,
                };
            case 4:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img4.width}`,
                    // top: "0px",
                    // left: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img2.width + 40 + props.metroPage.itemsStyleValues.img3.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img4.translateX}px, ${props.metroPage.itemsStyleValues.img4.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img4.transition}s ease-out`,
                };
            case 5:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img5.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: "0px",
                    transform: `translate(${props.metroPage.itemsStyleValues.img5.translateX}px, ${props.metroPage.itemsStyleValues.img5.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img5.transition}s ease-out`,
                };
            case 6:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img6.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img6.translateX}px, ${props.metroPage.itemsStyleValues.img6.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img6.transition}s ease-out`,
                };
            case 7:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img7.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img7.translateX}px, ${props.metroPage.itemsStyleValues.img7.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img7.transition}s ease-out`,
                };
            case 8:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img8.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img8.translateX}px, ${props.metroPage.itemsStyleValues.img8.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img8.transition}s ease-out`,
                };
            case 9:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img9.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40 + props.metroPage.itemsStyleValues.img6.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img9.translateX}px, ${props.metroPage.itemsStyleValues.img9.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img9.transition}s ease-out`,
                };
            case 10:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img10.width}`,
                    // top: `${props.metroPage.itemsStyleValues.img1.width + 40 + props.metroPage.itemsStyleValues.img5.width + 80}`,
                    // left: "0px",
                    transform: `translate(${props.metroPage.itemsStyleValues.img10.translateX}px, ${props.metroPage.itemsStyleValues.img10.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img10.transition}s ease-out`,
                };
            case 11:
                return {
                    position: "absolute",
                    width: `${props.metroPage.itemsStyleValues.img11.width}`,
                    // top: `${3 * props.metroPage.itemsStyleValues.img1.width + 120}`,
                    // left: `${props.metroPage.itemsStyleValues.img5.width + 40}`,
                    transform: `translate(${props.metroPage.itemsStyleValues.img11.translateX}px, ${props.metroPage.itemsStyleValues.img11.translateY}px)`,
                    transition: `transform ${props.metroPage.itemsStyleValues.img11.transition}s ease-out`,
                };
        }
    }

    const renderClassName = (id) => {
        switch(id){
            case 1:
                return classNameImg1;
            case 2:
                return classNameImg2;
            case 3:
                return classNameImg3;
            case 4:
                return classNameImg4;
            case 5:
                return classNameImg5;
            case 6:
                return classNameImg6;
            case 7:
                return classNameImg7;
            case 8:
                return classNameImg8;
            case 9:
                return classNameImg9;
            case 10:
                return classNameImg10;
            case 11:
                return classNameImg11;
        }
    }

    const getImagesWidthAndHeight = (obj) => {
        props.updateItemsStyleValues({
            img1: {
                ...props.metroPage.itemsStyleValues.img1,
                height: obj.img1.height
            }, 
            img2: {
                ...props.metroPage.itemsStyleValues.img2,
                height: obj.img2.height
            }, 
            img3: {
                ...props.metroPage.itemsStyleValues.img3,
                height: obj.img3.height
            },
            img4: {
                ...props.metroPage.itemsStyleValues.img4,
                height: obj.img4.height
            },
            img5: {
                ...props.metroPage.itemsStyleValues.img5,
                height: obj.img5.height
            },
            img6: {
                ...props.metroPage.itemsStyleValues.img6,
                height: obj.img6.height
            },
            img7: {
                ...props.metroPage.itemsStyleValues.img7,
                height: obj.img7.height,
            },
            img8: {
                ...props.metroPage.itemsStyleValues.img8,
                height: obj.img8.height
            },
            img9: {
                ...props.metroPage.itemsStyleValues.img9,
                height: obj.img9.height
            },
            img10: {
                ...props.metroPage.itemsStyleValues.img10,
                height: obj.img10.height
            },
            img11: {
                ...props.metroPage.itemsStyleValues.img11,
                height: obj.img11.height,
            }
        })
    }

    const renderMetroPageItemsStyle = () => {
        if(size.width > 1500){
            return 4*props.metroPage.itemsStyleValues.img1.width + 4*40;
        }
        if(size.width <= 1500 && size.width > 1430){
            return 5*props.metroPage.itemsStyleValues.img1.width + 5*40 - 5;
        }
        if(size.width <= 1430 && size.width > 1200){
            return 8*props.metroPage.itemsStyleValues.img1.width + 4*40 + 20;
        }
        if(size.width <= 1200 && size.width > 600){
            return 11*props.metroPage.itemsStyleValues.img1.width + 2*40 - 10;   
        }
    }
    // const renderMetroPageWrapper = () => {
    //     if(size.width > 1500){
    //         return{
    //             width: `calc(100% - 80px)`,
    //             padding: `40px`
    //         }
    //     }
    //     if(size.width <= 1500 && size.width > 1430){
    //         return{
    //             width: `calc(100% - 160px)`,
    //             padding: `80px`
    //         }
    //     }
    //     if(size.width <= 1430 && size.width > 1200){
    //         return{
    //             width: `calc(100% - 240px)`,
    //             padding: `120px`
    //         }
    //     }
    //     if(size.width <= 1200 && size.width > 600){
    //         return{
    //             width: `calc(100% - 80px)`,
    //             padding: `40px`
    //         }
    //     }
    // }
    
    const renderMetroPageData = () => {
        return(
            <div 
                id="metroPageItems"
                className="metro-page-items"
                style={{
                    position: "relative",
                    width: "100%",
                    height: `${renderMetroPageItemsStyle()}`,
                    border: "2px solid green"
                }}
            >{props.metroPage.items.map((el, i) => {
                return(
                    <div 
                        key={i} 
                        id={el.key}
                        // className={`metro-wide-page-item-id${el.id}`}
                        className={renderClassName(el.id)}
                        style={renderMetroWidePageItemStyle(el.id)}
                    >
                        <MetroItem
                            page="metroPage"
                            obj={el}
                            setUnmountComponentValues={props.setUnmountComponentValues}
                            unmountComponent={props.unmountComponent}
                            getImagesWidthAndHeight={(obj) => getImagesWidthAndHeight(obj)}
                            setIsHoveringCategory={props.setMetroPageIsHoveringCategory}
                            clearArchiveData={props.clearArchiveData}
                        />
                    </div>
                )
            })}</div>
        )
    }

    const renderMetroContent = () => {
        if(props.metroPage.loading && !props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <Loading color="black"/>
                </div>
            )
        }
        if(!props.metroPage.loading && !props.metroPage.error){
            return(
                <div 
                    className="metro-page-wrapper" 
                    // style={renderMetroPageWrapper()}
                >
                    {renderMetroPageData()}
                </div>
            )
        }
        if(!props.metroPage.loading && props.metroPage.error){
            return(
                <div 
                    className="metro-page-loading-error" 
                    style={{height: `${size.height}px`}}
                >
                    <H15 className="h19-nobel-lora">{`${props.metroPage.error}`}</H15>
                </div>
            )
        }
    } 
    
    /**
    * Markup
    */

    return(
        <div className="metro-page2" id="metroPage">
            {renderToolbars()}
            <div className="metro-page-header">
                <H65 className="h65-nero-poppins">Metro</H65>
            </div> 
            {renderMetroContent()}
            <Footer/>
        </div>   
    );
}

export default connect(
    (state) => {
        return {
            metroPage: Selectors.getMetroPageState(state),
            historyPopFromItem: Selectors.getHistoryPopFromPortfolioItemeState(state),
            menuDotsState: Selectors.getMenuDotsStateState(state),
        };
    },
    (dispatch) => {
        return {
            fetchMetroPage: bindActionCreators(Services.fetchMetroPage, dispatch),
            rememberCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.rememberCoordinateRangeForSwitchImagePage, dispatch),
            forgetCoordinateRangeForSwitchImagePage: bindActionCreators(Actions.forgetCoordinateRangeForSwitchImagePage, dispatch),
            setSwitchImagePageIsHoveringCategory: bindActionCreators(Actions.setSwitchImagePageIsHoveringCategory, dispatch),
            setMetroPageIsHoveringCategory: bindActionCreators(Actions.setMetroPageIsHoveringCategory, dispatch),
            setUnmountComponentValues: bindActionCreators(Actions.setUnmountComponentValues, dispatch),
            unmountComponent: bindActionCreators(Actions.unmountComponent, dispatch),
            setMenuDotsState: bindActionCreators(Actions.setMenuDotsState, dispatch),
            clearArchiveData: bindActionCreators(Actions.clearArchiveData, dispatch),
            updateItemsStyleValues: bindActionCreators(Actions.updateItemsStyleValues, dispatch),
        };
    }
)(MetroPage2);
 