"use client";

import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";

const GradientTop = ({ gradient }) => {
    const { isMobile } = useMatchMedia();
    const { deg, endPointEdge, startPoint, endPoint, opacityGradient } =
        gradient;
    const linearGradient = `linear-gradient(${isMobile ? "360" : deg}deg,
        ${endPoint["value"]} ${isMobile ? "70" : endPointEdge}%,
        ${startPoint["value"]} 100%)`;
    return (
        <div
            className={style.gradientTop}
            style={{
                background: linearGradient,
                opacity: isMobile ? "1" : opacityGradient,
            }}
        />
    );
};

export default GradientTop;
