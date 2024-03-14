
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ExternalLinkType = ({ className, page }) => {
    const { sectionName, pathname } = page;
    return (
        <a href={pathname} className={cl(className, style.link)} target="_blank">
            {sectionName}
        </a>
    );
};

export default ExternalLinkType;
