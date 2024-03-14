import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TitlePreview = ({ className, previewType, title }) => {
    return (
        <span
            className={cl(
                className,
                style.titlePreview,
                previewType === "main" ? style.titlePreviewMain : null,
                previewType === "secondary" ? style.titlePreviewSecondary : null
            )}
        >
            {title}
        </span>
    );
};

export default TitlePreview;
