import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const Container = ({ children, className }) => {
    return <div className={cl(className, style.container)}>{children}</div>;
};

export default Container;
