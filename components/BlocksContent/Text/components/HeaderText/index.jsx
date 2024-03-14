import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const HeaderText = ({ className, header }) => {
    return <div className={cl(className, style.headerText)}>{header}</div>;
};

export default HeaderText;
