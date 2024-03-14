import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const PlaceholderIcon = ({ className, children }) => {
    return <div className={cl(className, style.placeholder)}>{children}</div>;
};

export default PlaceholderIcon;
