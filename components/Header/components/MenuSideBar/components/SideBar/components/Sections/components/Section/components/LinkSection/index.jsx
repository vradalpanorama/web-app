"use client";
import { useGetLang, useLinkGeneration } from "@/hooks";
import Link from "next/link";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePathname, useRouter } from "next/navigation";

const LinkSection = ({ className, sectionObj }) => {
    const currentPathname = usePathname();
    const router = useRouter();
    const lang = useGetLang();
    const { _type } = sectionObj;

    let sectionName, pathname;
    switch (_type) {
        case "modal":
            sectionName = sectionObj["settings"]["nameModal"][lang];
            pathname = sectionObj["settings"]["queryParameter"]["current"];
            break;
        case "page":
            sectionName = sectionObj["settings"]["namePage"][lang];
            pathname = sectionObj["settings"]["pathname"]["isSectionPage"]
                ? `${sectionObj["settings"]["pathname"]["section"]["slug"]["current"]}/${sectionObj["settings"]["pathname"]["slug"]["current"]}`
                : sectionObj["settings"]["pathname"]["slug"]["current"];
            break;
        case "externalLink":
            sectionName = sectionObj["linkName"][lang];
            pathname = `/redirect?to=${sectionObj["queryParameter"]["current"]}`;
            break;
    }

    const getLink = useLinkGeneration();
    const hrefLink = _type === "externalLink" ? pathname : getLink(pathname);

    return (
        <>
            {(_type === "page" || _type === "externalLink") && (
                <Link href={hrefLink} className={cl(className, style.link)}>
                    {sectionName}
                </Link>
            )}
            {_type === "modal" && (
                <div
                    className={cl(className, style.link)}
                    onClick={() =>
                        router.push(`${currentPathname}?modal=${pathname}`)
                    }
                >
                    {sectionName}
                </div>
            )}
        </>
    );
};

export default LinkSection;
