import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const Content = ({ children, className }) => {
    return <div className={cl(className, style.content)}>{ children }</div>;
};

export default Content;
