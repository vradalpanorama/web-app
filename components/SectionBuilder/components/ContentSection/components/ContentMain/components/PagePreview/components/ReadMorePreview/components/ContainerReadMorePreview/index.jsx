import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerReadMorePreview = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerReadMorePreview,
                previewType === "main" ? style.containerReadMorePreviewMain : null,
                previewType === "secondary" ? style.containerReadMorePreviewSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerReadMorePreview;
