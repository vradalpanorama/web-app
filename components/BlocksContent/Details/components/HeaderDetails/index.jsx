import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const HeaderDetails = ({ className, header }) => {
    return <div className={cl(className, style.headerDetails)}>{header}</div>;
};

export default HeaderDetails;
