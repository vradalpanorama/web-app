"use client";
import React from "react";
import Link from "next/link";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang, useLinkGeneration } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";

const Item = ({ className, page }) => {
    const currentPathname = usePathname();
    const router = useRouter();
    const lang = useGetLang();
    const getLink = useLinkGeneration();
    const { _type } = page;

    let sectionName, pathname;
    switch (_type) {
        case "modal":
            sectionName = page["settings"]["nameModal"][lang];
            pathname = page["settings"]["queryParameter"]["current"];
            break;
        case "page":
            sectionName = page["settings"]["namePage"][lang];
            pathname = page["settings"]["pathname"]["isSectionPage"]
                ? `${page["settings"]["pathname"]["section"]["slug"]["current"]}/${page["settings"]["pathname"]["slug"]["current"]}`
                : page["settings"]["pathname"]["slug"]["current"];
            break;
        case "externalLink":
            sectionName = page["linkName"][lang];
            pathname = `/redirect?to=${page["queryParameter"]["current"]}`;
            break;
    }

    const hrefLink = _type === "externalLink" ? pathname : getLink(pathname);

    return (
        <li className={cl(className, style.item)}>
            {(_type === "page" || _type === "externalLink") && (
                <Link href={hrefLink} className={style.itemLink}>
                    {sectionName}
                </Link>
            )}
            {_type === "modal" && (
                <div
                    className={style.itemLink}
                    onClick={() =>
                        router.push(`${currentPathname}?modal=${pathname}`)
                    }
                >
                    {sectionName}
                </div>
            )}
        </li>
    );
};

export default Item;
