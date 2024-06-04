import { useState } from "react";
import { useSwiper } from "swiper/react";

//получает массив с элементами слайдера, такое поведение фиксит баг с начальным рендером кнопок при помощи swiper.slides
function SwiperControls({array}: {array: number[]}){
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState(swiper.activeIndex);


    /**
     * Перелистывает на следующий слайд. Меняет стейт, чтобы вызвать ререндер кнопок пагинации с корректными классами 
     */
    const handleNextClick = () => {
        setActiveIndex(activeIndex + 1);
        swiper.slideNext();
    }

    /**
     * Перелистывает на предыдущий слайд. Меняет стейт, чтобы вызвать ререндер кнопок пагинации с корректными классами 
     */
    const handlePrevClick = () => {
        setActiveIndex(activeIndex - 1);
        swiper.slidePrev();
    }

    /**
     * Перелистывает на выбранный слайд. Меняет стейт, чтобы вызвать ререндер кнопок пагинации с корректными классами 
     * @param index индекс выбранного слайда
     */
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
                array.map((item, index) => <button onClick={() => handleSlideTo(index)} className={`swiper__pagination-button ${activeIndex === index ? 'swiper__pagination-button_active' : ''}`} key={item}></button>)
            }
            <button className="swiper__button" onClick={handleNextClick} disabled={activeIndex === swiper.slides.length - 1}>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.3 0.299999C-0.0999998 0.699999 -0.0999998 1.3 0.3 1.7L8.1 9.5L0.3 17.3C-0.1 17.7 -0.1 18.3 0.3 18.7C0.7 19.1 1.3 19.1 1.7 18.7L10.2 10.2C10.6 9.8 10.6 9.2 10.2 8.8L1.7 0.299999C1.3 -0.1 0.7 -0.1 0.3 0.299999Z" fill="#A6ABBD"/>
                </svg>
            </button>
        </div>
    )
}

export default SwiperControls;