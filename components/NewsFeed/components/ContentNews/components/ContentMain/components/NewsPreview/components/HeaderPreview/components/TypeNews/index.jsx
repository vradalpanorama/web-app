"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";

const TypeNews = ({ className, type}) => {
    const lang = useGetLang()
    const no = {
        "news": "nyheter",
        "event": "Arrangement"
    }
    return (
        <span
            className={cl(
                className,
                style.typeNews,
            )}
        >
            {lang === 'en' && type}
            {lang === 'no' && no[type]}
        </span>
    );
};

export default TypeNews;
