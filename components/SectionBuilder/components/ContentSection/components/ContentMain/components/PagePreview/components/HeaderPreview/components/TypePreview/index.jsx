"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TypePreview = ({ className, type, lang }) => {
    const no = {
        page: "side",
        modal: "modal vindu",
        externalLink: "link",
    };
    const en = {
        page: "page",
        modal: "modal window",
        externalLink: "link",
    };
    return (
        <span className={cl(className, style.typePreview)}>
            {lang === "en" && en[type]}
            {lang === "no" && no[type]}
        </span>
    );
};

export default TypePreview;
