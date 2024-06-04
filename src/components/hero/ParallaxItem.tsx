import { Parallax } from "react-scroll-parallax";

function ParallaxItem({group}: {
    group: string;
}){
    return(
        <Parallax translateY={group === "right" ? [-30, 30] : [-20, 20]} className="parallax-item">
           <img className="parallax-image" src={`/${group}.webp`} alt="Bubbles" />
        </Parallax>
    )
}

export default ParallaxItem;