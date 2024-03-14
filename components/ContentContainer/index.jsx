import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContentContainer = ({ children, className, isRowDirection = false }) => {
    return (
        <div
            className={cl(
                className,
                style.container,
                isRowDirection ? "" : style.containerColumn
            )}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
