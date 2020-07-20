/**
* Libraries
*/

import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
   faChevronUp,
   faChevronDown
} from '@fortawesome/free-solid-svg-icons';

/**
* Styles
*/

import './swiper.scss';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../Hooks/useInterval';


/**
* Utility
*/

import {
    H25,
    H15,
    EH2
} from '../../components/UtilityComponents';

/**
* Images
*/

/**
* Swiper component definition and export
*/

export const Swiper = (props) => {

    const getHeight = () => window.innerHeight;
    const getWidth = () => window.innerWidth;
    
    // const [slides, setSlides] = useState([])
    const [isHoveringLeftArrow, setIsHoveringLeftArrow] = useState("init");
    const [isHoveringRightArrow, setIsHoveringRightArrow] = useState("init");
    // const [mouseDown, setMouseDown] = useState(false)
  
    // const []

    // const [state, setState] = useState({
    //     activeIndex: 0,
    //     translate: 0,
    //     transition: 0.45,
    //     _slides: []
    // });

    // const {activeIndex, translate, transition, _slides} = state;

    const transitionRef = useRef();
    const resizeRef = useRef();

    /**
    * Methods
    */

    useEffect(() => {
        let slidesArray = [...props.contentArray.items];
        let _slides;
        let swiperWrapper;
        let swiperContent;
        if(!props.contentArray.loading && props.contentArray.items.length === 3){
            swiperWrapper = document.getElementById('swiper-wrapper');   
            swiperContent = document.getElementById('swiper-content');
            
            
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]];
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })

            if(props.swiperData.rerender) {
                props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, props.swiperData.transition, true);
                let translateVal =  getTranslateValue(props.translateWidth, props.translateHeight);
                let _slides = updateSlides(props.swiperData.slides, props.swiperData.activeIndex);
                slide(swiperWrapper, swiperContent, translateVal, _slides);
                console.log("2GEN", props.swiperData.activeIndex)
            }else{
                props.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, false);
                console.log("1", getTranslateValue(props.translateWidth, props.translateHeight))
                slide(swiperWrapper, swiperContent, getTranslateValue(props.translateWidth, props.translateHeight));
            }
           
            // console.log("Addition", translateVal)
        }

        if(!props.contentArray.loading && props.contentArray.items.length === 4){
            _slides = [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]]
            // setState({
            //     ...state,
            //     _slides: [slidesArray[slidesArray.length - 1], slidesArray[0], slidesArray[1]],
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            // })
            console.log("3", props.swiperData._slides)
            prop.setSwiperState(slidesArray, _slides, 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, props.swiperData.rerender);
        }

   

        return () => {
           
            props.setSwiperState([], [], 0, getTranslateValue(props.translateWidth, props.translateHeight), 0.45, props.swiperData.rerender);
            console.log("4",props.swiperData._slides)
            if(swiperContent){
                swiperContent.removeEventListener('mousedown', handleMouseDown);
                // document.removeEventListener('mouseup', () => {})
                // document.removeEventListener('mousemove', () => {})
                // debugger
            }
           
            // setState({
            //     activeIndex: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
            //     transition: 0.45,
            //     _slides: []
            // });
            // setSlides([]);
        };
    }, [props.contentArray.loading, props.swiperData.slides.length, props.swiperData.activeIndex]);

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    })

    useEffect(() => {
        if(props.swiperData.transition === 0) {
            // setState({
            //     ...state,
            //     transition: 0.45
            // })
           
            props.setSwiperState(props.swiperData.slides, props.swiperData._slides, props.swiperData.activeIndex, props.swiperData.translate, 0.45, props.swiperData.rerender);
            console.log("5", props.swiperData._slides)
        }
    }, [props.swiperData.transition])

    useEffect(() => {

        const smooth = e => {
            if(e.target.className.includes(`${props.translateWidth ? "swiper-window-width-content" : "swiper-window-height-content"}`)){
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        let interval = null;

        window.addEventListener('transitionend', smooth);
        window.addEventListener('resize', resize);
        window.addEventListener('resize', resize);  
        
   

        return () => {
            window.removeEventListener('transitionend', smooth);
            window.removeEventListener('resize', resize);
            // swiper.removeEventListener('mousedown', (e) => handleMouseUp(e));
            swiper.removeEventListener('mousemove', handleMouseMove);
            // swiper.removeEventListener('mouseup', (e) => handleMouseUp(e));
        };
    }, [])

    useInterval(() => {
        nextSlide();
    }, props.autoPlay ? 3000 : null)

    const slide = (swiperWrapper, swiperContent, translateVal, _slides) => {
        let posX1 = 0;
        let posX2 = 0;
        let posInitial;
        let posFinal;
        let threshold = 50; //draging delta
        let direction;

        swiperContent.addEventListener('mousedown', (e) => handleMouseDown(e, dragStart, swiperContent));

        document.addEventListener('mouseup', (e) => {
          
            swiperContent.classList.remove('active');
        });

        function dragStart (e) {
            e = e || window.event;
            e.preventDefault();
            console.log("Addition",props.swiperData.activeIndex)
            // let translateValue = props.swiperData.translate
            posInitial = swiperContent.offsetLeft;
            // console.log("posInitial", posInitial)
            if (e.type == 'touchstart') {
              posX1 = e.touches[0].clientX;
            } else {
              posX1 = e.clientX;
            //   console.log("posX1", posX1)
              document.onmouseup = dragEnd;
              document.onmousemove = dragAction;
            }
        }

        function dragAction (e) {
            e = e || window.event;
            if (e.type == 'touchmove') {
              posX2 = posX1 - e.touches[0].clientX;
              posX1 = e.touches[0].clientX;
            } else {
              posX2 = posX1 - e.clientX;
              posX1 = e.clientX;
            }
            // console.log("posX11", posX1)
            direction = e.movementX;
            swiperContent.style.left = (swiperContent.offsetLeft - posX2) + "px";
        }
        
        function dragEnd (e) {
            // posFinal = swiperContent.offsetLeft;
            if(direction > 0){
                prevSlide(swiperContent, posInitial, _slides);
            }else{
                nextSlide(swiperContent, posInitial, translateVal, _slides);
            }
            // if (posFinal - posInitial < -threshold) {
            //     nextSlide(props.swiperData.activeIndex);
            // } else if (posFinal - posInitial > threshold) {
            //     prevSlide(props.swiperData.activeIndex);
            // } else {
                // swiperContent.style.left = (posInitial) + "px";
            // }
      
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    const handleMouseDown = (e, dragStart, swiperContent) => {
        dragStart(e)
        swiperContent.classList.add('active');
    }
    const getTranslateValue = (width, height) => {
        if(width){
            if(width === "windowWidth"){
                return getWidth();
            }else{
                return width;
            }
        }
        if(height){
            if(height === "windowHeight"){
                return getHeight();
            }else{
                return height;
            }
        }
    }
    
    const handleResize = () => {
        // setState({
        //     ...state,
        //     translate: getTranslateValue(props.translateWidth, props.translateHeight),
        //     transition: 0
        // })
        props.setSwiperState(props.swiperData.slides, props.swiperData._slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, true);
    }

    const smoothTransition = () => {
        let _slides = [];
        let slides = [...props.swiperData.slides];
        let activeIndex = props.swiperData.activeIndex;
        if(props.showNumbersOfSlides === 1){

            _slides = updateSlides(slides, activeIndex);
            //We're at the last slide
           
            // setState({
            //     ...state,
            //     _slides,
            //     transition: 0,
            //     translate: getTranslateValue(props.translateWidth, props.translateHeight)
            // })
          
            props.setSwiperState(props.swiperData.slides, _slides, activeIndex, getTranslateValue(props.translateWidth, props.translateHeight), 0, props.swiperData.rerender);
            console.log("6",props.swiperData._slides)
        }
        if(props.showNumbersOfSlides === 3){
            if(activeIndex === slides.length - 1){
                _slides = [slides[slides.length - 2], slides[slides.length - 1], slides[0], slides[1], slides[2]];
            }
            if (activeIndex === 0){
                _slides = [slides[slides.length - 1], slides[0], slides[1], slides[2], slides[3]];
            }
            if(activeIndex === 1){
                _slides = slides.slice(activeIndex - 1, activeIndex + 5);
            }
            if(activeIndex === 2){
                _slides = [slides[1], slides[2], slides[3], slides[slides.length - 1], slides[0]];
            }
            if(activeIndex === 3){
                _slides = [slides[2], slides[3], slides[slides.length - 1], slides[0], slides[1]];
            }
            console.log("7")
            setState({
                ...state,
                _slides,
                transition: 0,
                translate: getTranslateValue(props.translateWidth, props.translateHeight)
            })
        }
      
    }

    const updateSlides = (slides, activeIndex) => {
        let _slides = [];
        if(activeIndex === slides.length - 1)
        _slides = [props.swiperData.slides[slides.length - 2], slides[slides.length - 1], slides[0]];
        //We're back at the first slide. Just reset to how it was on initial render.
        else if (activeIndex === 0) _slides = [slides[slides.length - 1], slides[0], slides[1]]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

        return _slides;
    }

    const prevSlide = (swiperContent, posInitial, _slides) => {
        if(swiperContent){
            swiperContent.style.left = (-posInitial) + "px";
        }
        // setState({
        //     ...state,
        //     translate: 0,
        //     activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        // })
        let translate = 0;
        let activeIndex = props.swiperData.activeIndex === 0 ? props.swiperData.slides.length - 1 : props.swiperData.activeIndex - 1;
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
     
      
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true);
        console.log("8GEN", props.swiperData._slides)

    }

    const nextSlide = (swiperContent, posInitial, translateVal, _slides) => {
        if(swiperContent){
            swiperContent.style.left = (-posInitial) + "px";
        }
        // console.log(activeIndex)
        // setState({
        //     ...state,
        //     translate: translate + getTranslateValue(props.translateWidth, props.translateHeight),
        //     activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        // })
        
        let translate = translateVal ? translateVal + getTranslateValue(props.translateWidth, props.translateHeight) : props.swiperData.translate + getTranslateValue(props.translateWidth, props.translateHeight);
        let activeIndex = props.swiperData.activeIndex === props.swiperData.slides.length - 1 ? 0 : props.swiperData.activeIndex + 1
        let _updatedSlides = _slides ? _slides : props.swiperData._slides;
        
        props.setSwiperState(props.swiperData.slides, _updatedSlides, activeIndex, translate, props.swiperData.transition, true);
        console.log("9GEN", props.swiperData._slides)
       
    }

    const handleMouseEnter = (opt) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('on');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('on');
                break;
        }
    }

    const handleMouseLeave = (opt) => {
        switch(opt){
            case 'leftArrow': 
                setIsHoveringLeftArrow('off');
                break;
            case 'rightArrow': 
                setIsHoveringRightArrow('off');
                break;
        }
    }

    const renderClassName = (opt, isHovering) => {
        if(opt === "leftArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-left-wrapper";
                case 'on':
                    return "swiper-arrow-left-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-left-wrapper-hover-off"
            }
        }
        if(opt === "rightArrow"){
            switch(isHovering){
                case 'init':
                    return "swiper-arrow-right-wrapper";
                case 'on':
                    return "swiper-arrow-right-wrapper-hover-on";
                case 'off':
                    return "swiper-arrow-right-wrapper-hover-off"
            }
        }      
    }

    const loadImage = (img) => {
        switch(img) {
            case 'image1': 
                return StoryImage1;
            case 'image2': 
                return StoryImage2;
            case 'image3': 
                return StoryImage3;
            case 'image4': 
                return StoryImage4;
            case 'image5': 
                return StoryImage5;
            case 'image6': 
                return StoryImage6;
            default:
                return ""; 
        }
    }

    const renderSwiper = () => {
    //   console.log(_slides)
      if(!props.contentArray.loading){
        if(props.translateWidth){
            return(
                <div 
                    className="swiper-window-width-content" 
                    id="swiper-content"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translateX(-${props.swiperData.translate}px)`,
                        transition: `transform ${props.swiperData.transition}s ease-out`,
                        width: `${getTranslateValue(props.translateWidth, props.translateHeight) * 3}px`
                    }}
                >{props.swiperData._slides.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            className="slide"
                            id="slide"
                            style={{width: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                        >
                           <H25 className="h25-white-lustria">{el.feedback}</H25>
                           <EH2/>
                            <div className="author-name-wrapper">
                                <div className="slide-dash"/>
                                <H25 className="h25-white-teko">{el.author}</H25>
                            </div>
                        </div>
                    )
                })}</div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-window-height-content" 
                    id="swiper-content"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translateY(-${translate}px)`,
                        transition: `transform ${transition}s ease-out`,
                        height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`
                    }}
                >{_slides.map((el, i) => {
                    return(
                        <div 
                            key={i} 
                            className="slide"
                            style={{height: `${getTranslateValue(props.translateWidth, props.translateHeight)}px`}}
                        >
                            <img src={loadImage(el)}/>
                        </div>
                    )
                })}</div>
            )
        }
      }
       
       
    }

    const renderFirstArrow = () => {
        if(props.translateWidth){
            return(
                <div className="swiper-arrow-left">
                    <div 
                        // className="swiper-arrow-left-wrapper"
                        className={renderClassName("leftArrow", isHoveringLeftArrow)}
                        onClick={() => prevSlide(null, null)}
                        onMouseEnter={() => handleMouseEnter('leftArrow')} 
                        onMouseLeave={() => handleMouseLeave('leftArrow')}
                        id="prev"
                    >
                        <div className="h17-white-lustria">Previous</div>
                        <div className="swiper-arrow-left-line"/>
                    </div>
                </div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-arrow-up"
                    onClick={() => prevSlide(null, null)}
                    onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronUp} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    />
                </div>
            )
        }
    }

    const renderSecondArrow = () => {
        if(props.translateWidth){
            return(
                <div className="swiper-arrow-right">
                    <div 
                        // className="swiper-arrow-right-wrapper"
                        className={renderClassName("rightArrow", isHoveringRightArrow)}
                        onClick={() => nextSlide(null, null)}
                        onMouseEnter={() => handleMouseEnter('rightArrow')} 
                        onMouseLeave={() => handleMouseLeave('rightArrow')}
                        id="next"
                    >
                        <div className="h17-white-lustria">Next</div>
                        <div className="swiper-arrow-right-line"/>
                    </div>
                </div>
            )
        }
        if(props.translateHeight){
            return(
                <div 
                    className="swiper-arrow-down"
                    onClick={() => nextSlide(null, null)}
                    onMouseEnter={handleMouseEnter} 
                >
                    <FontAwesomeIcon 
                        icon={faChevronDown} 
                        size="sm" 
                        color="white" 
                        className="icon"
                    /> 
                </div>
            )
        }
       
    }


    /**
    * Markup
    */

    return(
        <div className="swiper" id="swiper">
            {renderFirstArrow()}
            <div className="swiper-wrapper"  id="swiper-wrapper">
                {renderSwiper()}
            </div>
            {renderSecondArrow()}
            {/* {console.log(mouseDown)} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            swiperData: Selectors.getSwiperDataState(state)
        };
    },
    (dispatch) => {
        return {
            // fetchSection1Data: bindActionCreators(Services.fetchSection1Data, dispatch),
            setSwiperState: bindActionCreators(Actions.setSwiperState, dispatch),
            // nextImage: bindActionCreators(Actions.nextImage, dispatch),
            // photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
        };
    }
)(Swiper);
 