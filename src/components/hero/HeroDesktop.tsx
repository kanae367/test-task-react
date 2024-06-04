import HeadphonesIcon from "./icons/HeadphonesIcon";
import CubeIcon from "./icons/CubeIcon";
import TabletIcon from "./icons/TabletIcon";
import GamepadIcon from "./icons/GamepadIcon";

function HeroDesktop(){
    return(
        <>
        <h1 className="hero__title">Lorem ipsum, dolor sit amet consectetur </h1>
        <div className="hero__content">
          <div className="hero__content-item hero__content-item_first">
            <HeadphonesIcon/>
            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-item hero__content-item_second">
            <CubeIcon/>
            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-item hero__content-item_six">
            <CubeIcon/>

            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-item hero__content-item_third">
            <TabletIcon/>
            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-item hero__content-item_fifth">
            <HeadphonesIcon/>
            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-item hero__content-item_fourth">
            <GamepadIcon/>
            <p className="hero__content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="hero__content-item hero__content-item_berry">
              <img width={436} height={230} className="hero__content-image" src="/berry.webp" alt="Ягоды" />
          </div>
        </div>
        </>
    )
}

export default HeroDesktop;