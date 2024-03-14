import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const BtnExternalLink = ({ className, children }) => {
    return (
        <a href={""} className={cl(className, style.btnExternalLink)}>
            {children}
        </a>
    );
};

export default BtnExternalLink;
