import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerPreview = ({ className, newsType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerPreview,
                newsType === "main" ? style.containerPreviewMain : null,
                newsType === "secondary" ? style.containerPreviewSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerPreview;
