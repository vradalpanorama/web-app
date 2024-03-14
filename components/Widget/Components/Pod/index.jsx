import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const Pod = ({ children, className }) => {
    return <div className={cl(className, style.pod)}>{children}</div>;
};

export default Pod;
