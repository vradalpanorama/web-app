import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const Content = ({ children, className }) => {
    return <nav className={cl(className, style.content)}>{children}</nav>;
};

export default Content;
