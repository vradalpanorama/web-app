import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerLeadPreview = ({ className, newsType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.сontainerLeadPreview,
                newsType === "main" ? style.сontainerLeadPreviewMain : null,
                newsType === "secondary"
                    ? style.сontainerLeadPreviewSecondary
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerLeadPreview;
