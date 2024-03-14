import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerContentNews = ({ className, children }) => {
    return (
        <div className={cl(className, style.containerContentNews)}>
            {children}
        </div>
    );
};

export default ContainerContentNews;
