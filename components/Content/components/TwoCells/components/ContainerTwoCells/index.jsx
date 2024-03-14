import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerTwoCells = ({ className, children }) => {
    return (
        <div className={cl(className, style.containerTwoCells)}>{children}</div>
    );
};

export default ContainerTwoCells;
