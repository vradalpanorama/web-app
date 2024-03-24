import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerCaptionPreview = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerCaptionPreview,
                previewType === "main" ? style.containerCaptionPreviewMain : null,
                previewType === "secondary" ? style.containerCaptionPreviewSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerCaptionPreview;
