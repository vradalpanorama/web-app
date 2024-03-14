import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TitleText = ({ className, title }) => {
    return <h1 className={cl(className, style.title)}>{title}</h1>;
};

export default TitleText;
