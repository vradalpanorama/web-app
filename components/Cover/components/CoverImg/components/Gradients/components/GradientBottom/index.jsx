import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
const GradientBottom = ({ gradient }) => {

    const deg = 360;
    const startPoint = 'rgba(255, 255, 255, 0)'
    const endPoint = 'rgba(255, 255, 255, 1)'
    const { startPointEdge } = gradient;
    const endPointEdge = 5.73;

    const linearGradient = `linear-gradient(${deg}deg,
        ${endPoint} ${endPointEdge}%,
        ${startPoint} ${startPointEdge}%)`;

    const gradientStyles = {
        background: linearGradient,
    };

    return <div style={gradientStyles} className={style.gradientBottom} />;
};

export default GradientBottom;
