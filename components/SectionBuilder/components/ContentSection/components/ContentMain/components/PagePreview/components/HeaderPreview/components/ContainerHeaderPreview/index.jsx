import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
const ContainerHeaderPreview = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerHeaderPreview,
                previewType === "main" ? style.containerHeaderPreviewMain : null,
                previewType === "secondary"
                    ? style.containerHeaderPreviewSecondary
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerHeaderPreview;
