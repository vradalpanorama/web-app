"use client";
import Link from "next/link";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useLinkGeneration } from "@/hooks";

const InternalLinkType = ({ className, page }) => {
    const { sectionName, pathname } = page;

    const getLink = useLinkGeneration();
    const hrefLink = getLink(pathname);
    return (
        <Link href={hrefLink} className={cl(className, style.link)}>
            {sectionName}
        </Link>
    );
};

export default InternalLinkType;
