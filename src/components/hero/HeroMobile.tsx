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
                  <SwiperSlide className="hero__content-item hero__content-item_first">
                    <svg className="hero__content-icon" width="64" height="73" viewBox="0 0 64 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M60 39.5V25C60 11.7452 49.2548 1 36 1H28C14.7452 1 4 11.7452 4 25V39.5" stroke="#2E3A59" stroke-width="2"/>
                      <path d="M9 31C9 18.2975 19.2975 8 32 8C44.7025 8 55 18.2975 55 31V39C55 51.7025 44.7025 62 32 62C19.2975 62 9 51.7025 9 39V31Z" stroke="#2E3A59" stroke-width="2"/>
                      <path d="M29.5 70.5L36 70.5C49.2548 70.5 60 59.7548 60 46.5L60 36" stroke="#2E3A59" stroke-width="2"/>
                      <rect x="1" y="32" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                      <rect x="57" y="32" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                    </svg>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item hero__content-item_first">
                    <svg className="hero__content-icon hero__content-icon_rotate" width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.0001" cy="64" r="7" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="25.0001" y="24" width="30" height="30" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="37.0001" y="26" width="6" height="8" stroke="#00C368" stroke-width="2"/>
                    </svg>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item hero__content-item_first">
                    <svg className="hero__content-icon" width="97" height="87" viewBox="0 0 97 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1606 40.3291L40.7138 14.7759C46.5716 8.91807 56.0691 8.91807 61.927 14.7759L66.375 19.224C72.7391 25.588 72.1152 36.1228 65.2297 42.0046C61.3794 45.2937 57.381 48.849 54.1861 52.0092C50.446 55.7086 46.2116 60.4448 42.397 64.8965C36.5133 71.7631 25.9904 72.372 19.6344 66.016L15.1607 61.5423C9.30279 55.6844 9.30278 46.1869 15.1606 40.3291Z" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M59.8823 12.5008L60.2826 12.9011C66.6466 19.2651 66.0227 29.7999 59.1373 35.6817C55.287 38.9708 51.2885 42.5261 48.0936 45.6863C44.3535 49.3858 40.1191 54.1219 36.3046 58.5736C30.4208 65.4402 19.8979 66.0492 13.5419 59.6932L13.1361 59.2873C7.76616 53.9174 7.26438 45.4045 12.1268 39.6212C16.509 34.409 21.7878 28.3753 26.302 23.9102C30.2797 19.9757 35.5537 15.3897 40.2347 11.4712C46.0197 6.62846 54.5204 7.13891 59.8823 12.5008Z" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="34.1521" y="26.7675" width="15.6653" height="15.6653" rx="7.83265" transform="rotate(-45 34.1521 26.7675)" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="19.6955" y="48.1799" width="3.04723" height="3.04723" rx="1.52361" transform="rotate(-45 19.6955 48.1799)" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="69.4999" y="63.9999" width="26" height="22" rx="1" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M71.4999 40.9994C78.4999 42.9994 82.4999 45.9999 82.5001 56.999" stroke="#2E3A59" stroke-width="2"/>
                    </svg>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item hero__content-item_first">
                    <svg className="hero__content-icon" width="57" height="72" viewBox="0 0 57 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1" width="54" height="70" rx="3" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M9.5 1H47.5V6C47.5 7.65685 46.1569 9 44.5 9H12.5C10.8431 9 9.5 7.65685 9.5 6V1Z" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M9.5 57C9.5 55.3431 10.8431 54 12.5 54H44.5C46.1569 54 47.5 55.3431 47.5 57V59C47.5 60.6569 46.1569 62 44.5 62H12.5C10.8431 62 9.5 60.6569 9.5 59V57Z" stroke="#00C368" stroke-width="2"/>
                    </svg>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </SwiperSlide>
                  <SwiperSlide className="hero__content-item hero__content-item_first">
                    <svg className="hero__content-icon" width="64" height="73" viewBox="0 0 64 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 39.5V25C60 11.7452 49.2548 1 36 1H28C14.7452 1 4 11.7452 4 25V39.5" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M9 31C9 18.2975 19.2975 8 32 8C44.7025 8 55 18.2975 55 31V39C55 51.7025 44.7025 62 32 62C19.2975 62 9 51.7025 9 39V31Z" stroke="#2E3A59" stroke-width="2"/>
                        <path d="M29.5 70.5L36 70.5C49.2548 70.5 60 59.7548 60 46.5L60 36" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="1" y="32" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                        <rect x="57" y="32" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                    </svg>
                    <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></SwiperSlide>
                <SwiperControls/>
            </Swiper>
            </>
    )
}

export default HeroMobile;