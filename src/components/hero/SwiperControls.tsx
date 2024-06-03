import { useState } from "react";
import { useSwiper } from "swiper/react";

function SwiperControls(){
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState(swiper.activeIndex);

    const handleNextClick = () => {
        setActiveIndex(activeIndex + 1);
        swiper.slideNext();
    }

    const handlePrevClick = () => {
        setActiveIndex(activeIndex - 1);
        swiper.slidePrev();
    }

    const handleSlideTo = (index: number) => {
        setActiveIndex(index);
        swiper.slideTo(index);
    }

    return(
        <div className="swiper__navigation" slot="container-end">
            <button className="swiper__button" onClick={handlePrevClick} disabled={activeIndex === 0}>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2 18.7C10.6 18.3 10.6 17.7 10.2 17.3L2.4 9.5L10.2 1.7C10.6 1.3 10.6 0.7 10.2 0.3C9.8 -0.1 9.2 -0.1 8.8 0.3L0.3 8.8C-0.0999998 9.2 -0.0999999 9.8 0.3 10.2L8.8 18.7C9.2 19.1 9.8 19.1 10.2 18.7Z" fill="#A6ABBD"/>
                </svg>
            </button>
            {
                swiper.slides.map((item, index) => <button onClick={() => handleSlideTo(index)} className={`swiper__pagination-button ${activeIndex === index ? 'swiper__pagination-button_active' : ''}`} key={index}></button>)
            }
            <button className="swiper__button" onClick={handleNextClick} disabled={activeIndex === swiper.slides.length - 1}>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2 18.7C10.6 18.3 10.6 17.7 10.2 17.3L2.4 9.5L10.2 1.7C10.6 1.3 10.6 0.7 10.2 0.3C9.8 -0.1 9.2 -0.1 8.8 0.3L0.3 8.8C-0.0999998 9.2 -0.0999999 9.8 0.3 10.2L8.8 18.7C9.2 19.1 9.8 19.1 10.2 18.7Z" fill="#A6ABBD"/>
                </svg>
            </button>
        </div>
    )
}

export default SwiperControls;