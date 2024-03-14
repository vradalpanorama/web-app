import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerPreview = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerPreview,
                previewType === "main" ? style.containerPreviewMain : null,
                previewType === "secondary" ? style.containerPreviewSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerPreview;
