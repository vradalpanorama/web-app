import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerMain = ({ className, children }) => {
    return <div className={cl(className, style.containerMain)}>{children}</div>;
};

export default ContainerMain;
