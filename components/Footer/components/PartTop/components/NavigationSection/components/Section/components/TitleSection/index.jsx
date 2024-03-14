import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TitleSection = ({ className, title }) => {
    return <div className={cl(className, style.title)}>{title.replace(/\s/g, '\u00A0')}</div>;
};

export default TitleSection;
