import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Title = ({ className, titleText }) => {
    return <h6 className={cl(className, style.title)}>{titleText}</h6>;
};

export default Title;
