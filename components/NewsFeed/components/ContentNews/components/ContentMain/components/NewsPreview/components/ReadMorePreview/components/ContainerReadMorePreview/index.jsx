import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerReadMorePreview = ({ className, newsType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.сontainerReadMorePreview,
                newsType === "main" ? style.сontainerReadMorePreviewMain : null,
                newsType === "secondary" ? style.сontainerReadMorePreviewSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerReadMorePreview;
