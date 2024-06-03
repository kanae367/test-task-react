import './hero.scss';
import { useMediaQuery } from 'react-responsive';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';

function Hero(){
    const isLargeScreen = useMediaQuery({
      query: '(min-width: 1024px)'
    });

    return(
      <section className="hero">
        {
          isLargeScreen 
          ? <>
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