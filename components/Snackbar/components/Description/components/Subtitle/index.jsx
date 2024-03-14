import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Subtitle = ({ className, subtitleText }) => {
    return <p className={cl(className, style.subtitle)}>{subtitleText}</p>;
};

export default Subtitle;
