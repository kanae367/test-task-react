import HeadphonesIcon from "./icons/HeadphonesIcon";
import CubeIcon from "./icons/CubeIcon";
import TabletIcon from "./icons/TabletIcon";
import GamepadIcon from "./icons/GamepadIcon";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import SwiperControls from "./SwiperControls";
import './hero-swiper.scss';

function HeroMobile(){
    return(
        <>
        <img width={218} height={115} className="hero__content-image" src="/berry.webp" alt="Ягоды" />
            <h1 className="hero__title">Lorem ipsum, dolor sit amet consectetur </h1>
            <Swiper
            className='wrapper'
              spaceBetween={50}
              slidesPerView={1}
              pagination={{clickable: true}}
              >
                  <SwiperSlide className="hero__content-item">
                    <HeadphonesIcon/>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item">
                    <CubeIcon/>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item">
                    <GamepadIcon/>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item">
                    <TabletIcon/>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item">
                    <HeadphonesIcon/>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></SwiperSlide>
                <SwiperControls/>
            </Swiper>
            </>
    )
}

export default HeroMobile;