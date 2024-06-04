import './hero.scss';
import { useMediaQuery } from 'react-responsive';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxItem from './ParallaxItem';

function Hero(){
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  return(
    <section className="hero">
        {
          isLargeScreen 
          ? <>
              <div className='parallax-container'>
                <ParallaxProvider>
                  <ParallaxItem group={'left'}/>
                  <ParallaxItem group={'right'}/>
                </ParallaxProvider>
              </div>
              <HeroDesktop/>
            </>
          : <>
              <HeroMobile />
            </>
        }
      </section>
  )
}

export default Hero;