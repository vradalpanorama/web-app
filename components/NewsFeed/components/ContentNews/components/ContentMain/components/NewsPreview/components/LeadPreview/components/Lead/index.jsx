import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Lead = ({ className, newsType, lead }) => {
    return (
        <span
            className={cl(
                className,
                style.lead,
                newsType === "main" ? style.leadMain : null,
                newsType === "secondary" ? style.leadSecondary : null
            )}
        >
            {lead}
        </span>
    );
};

export default Lead;
