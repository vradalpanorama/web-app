import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Icons = ({ className, children }) => {
    return <div className={cl(className, style.icons)}>{children}</div>;
};

export default Icons;
