import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
const ContainerHeaderPreview = ({ className, newsType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerHeaderPreview,
                newsType === "main" ? style.containerHeaderPreviewMain : null,
                newsType === "secondary"
                    ? style.containerHeaderPreviewSecondary
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerHeaderPreview;
