import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Title = ({ className, children }) => {
    return <span className={cl(className, style.title)}>{children}</span>;
};

export default Title;
