import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ElementTopPart = ({ className, children }) => {
    return <div className={cl(className, style.topPart)}>{children}</div>;
};

export default ElementTopPart;
