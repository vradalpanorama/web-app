import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Bubble = ({ className, radialGradient }) => {
    const bubbleStyles = {
        background: radialGradient,
    };
    return <div style={bubbleStyles} className={cl(className, style.bubble)} />;
};

export default Bubble;
