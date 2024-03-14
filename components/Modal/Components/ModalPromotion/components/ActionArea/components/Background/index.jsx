import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Background = ({ className, children }) => {
    return (
        <div className={cl(className, style.background)}>{children}</div>
    );
};

export default Background;
