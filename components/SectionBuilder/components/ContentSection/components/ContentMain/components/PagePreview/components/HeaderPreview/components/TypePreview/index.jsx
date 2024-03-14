"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TypePreview = ({ className, type, lang }) => {
    const no = {
        page: "side",
        modal: "modal",
        externalLink: "Link",
    };
    const en = {
        page: "page",
        modal: "modal",
        externalLink: "Link",
    };
    return (
        <span className={cl(className, style.typePreview)}>
            {lang === "en" && en[type]}
            {lang === "no" && no[type]}
        </span>
    );
};

export default TypePreview;
