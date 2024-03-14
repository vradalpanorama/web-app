import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Item = ({ className, children }) => {
    return <div className={cl(className, style.item)}>{children}</div>;
};

export default Item;
