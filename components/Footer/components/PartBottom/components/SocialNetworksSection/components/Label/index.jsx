import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Label = ({ className, i18nLabel }) => {
    return <span className={cl(className, style.label)}>{i18nLabel}</span>;
};

export default Label;
