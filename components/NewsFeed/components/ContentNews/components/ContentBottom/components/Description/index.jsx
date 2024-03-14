"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";

const Description = ({ className, description }) => {
    const lang = useGetLang();
    return (
        <span className={cl(className, style.description)}>
            {description[lang]}
        </span>
    );
};

export default Description;
