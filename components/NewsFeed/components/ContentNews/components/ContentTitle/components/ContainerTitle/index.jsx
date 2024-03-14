import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerTitle = ({ className, children }) => {
    return (
        <div className={cl(className, style.containerTitle)}>{children}</div>
    );
};

export default ContainerTitle;
