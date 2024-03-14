import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerLeadPreview = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.containerLeadPreview,
                previewType === "main" ? style.containerLeadPreviewMain : null,
                previewType === "secondary"
                    ? style.containerLeadPreviewSecondary
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerLeadPreview;
