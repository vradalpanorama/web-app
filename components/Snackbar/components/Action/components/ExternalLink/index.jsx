"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ExternalLink = ({ className, pathname, text }) => {
    return (
        <a href={pathname} className={cl(className, style.link)} target="_blank">
            {text}
        </a>
    );
};

export default ExternalLink;
