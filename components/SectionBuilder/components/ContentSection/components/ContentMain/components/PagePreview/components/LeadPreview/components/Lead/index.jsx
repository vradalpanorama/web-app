import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Lead = ({ className, previewType, lead }) => {
    return (
        <span
            className={cl(
                className,
                style.lead,
                previewType === "main" ? style.leadMain : null,
                previewType === "secondary" ? style.leadSecondary : null
            )}
        >
            {lead}
        </span>
    );
};

export default Lead;
