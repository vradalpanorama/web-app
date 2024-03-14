"use client";

import { useGetLang, useLinkGeneration } from "@/hooks";
import Link from "next/link";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ExploreAll = ({ className, pathname }) => {
    const lang = useGetLang();
    const title = lang === 'en' ? "Explore All" : 'utforsk alle';
    const getLink = useLinkGeneration();
    const hrefLink = getLink(pathname);
    return (
        <Link href={hrefLink} className={cl(className, style.link)}>
            {title.toUpperCase()}
        </Link>
    );
};

export default ExploreAll;
