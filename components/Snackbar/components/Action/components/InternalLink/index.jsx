"use client";

import React from "react";
import Link from "next/link";

import cl from "classnames";
import style from "./index.module.scss";
import { useLinkGeneration } from "@/hooks";

const InternalLink = ({ className, page }) => {
    const { sectionName, pathname } = page;

    const getLink = useLinkGeneration();
    const hrefLink = getLink(pathname);
    return (
        <Link href={hrefLink} className={cl(className, style.link)}>
            {sectionName}
        </Link>
    );
};

export default InternalLink;
