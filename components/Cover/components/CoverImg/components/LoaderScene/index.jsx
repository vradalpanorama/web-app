import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Bubble, Container } from "./components";

const LoaderScene = () => {
    const radialGradientBubble = `radial-gradient(50% 50% at 50% 50%, #136EFB 0%, #136EFB 8.33%, rgba(19, 110, 251, 0.00) 100%)`;
    return (
        <Container>
            <Bubble
                className={style.bubbleOne}
                radialGradient={radialGradientBubble}
            />
            <Bubble
                className={style.bubbleTwo}
                radialGradient={radialGradientBubble}
            />
        </Container>
    );
};

export default LoaderScene;
