"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import cl from "classnames";
import style from "./index.module.scss";
import { useLinkGeneration, useLocalSwitcher, useGetLang } from "@/hooks";
import { useNavigationDesktop } from "@/helpers/zustandStores/headerState";

const SectionTitleLink = ({ className, sectionObj }) => {
    // const {
    //     name,
    //     params: { sectionName, pathname },
    // } = sectionObj;
    const currentPathname = usePathname();
    const router = useRouter();
    const lang = useGetLang();

    const { _type } = sectionObj;

    let name, sectionName, pathname;
    switch (_type) {
        case "section":
            name = sectionObj["title"]["en"];
            sectionName = sectionObj["title"][lang];
            pathname = sectionObj["slug"]["current"];
            break;
        case "page":
            name = sectionObj["settings"]["namePage"]["en"];
            sectionName = sectionObj["settings"]["namePage"][lang];
            pathname = sectionObj["settings"]["pathname"]["isSectionPage"]
                ? `${sectionObj["settings"]["pathname"]["section"]["slug"]["current"]}/${sectionObj["settings"]["pathname"]["slug"]["current"]}`
                : sectionObj["settings"]["pathname"]["slug"]["current"];
            break;
        case "modal":
            name = sectionObj["settings"]["nameModal"]["en"];
            sectionName = sectionObj["settings"]["nameModal"][lang];
            pathname = sectionObj["settings"]["queryParameter"]["current"];
            break;
        case "externalLink":
            name = sectionObj["linkName"]["en"];
            sectionName = sectionObj["linkName"][lang];
            pathname = `/redirect?to=${sectionObj["queryParameter"]["current"]}`;
            break;
        case "locale-switcher":
            name = "locale-switcher";
            sectionName = lang === "en" ? "NOR" : "ENG";
            pathname = lang === "en" ? "/" : "en";
            break;
    }

    const getLink = useLinkGeneration();
    const [getLinkLocalSwitcher, changeLocaleCookies] = useLocalSwitcher();

    const refContainer = useRef();
    const [widthSection, setWidthSection] = useState();

    const [activeSection, setActiveSection, removeActiveSection] =
        useNavigationDesktop((state) => [
            state.activeSection,
            state.setActiveSection,
            state.removeActiveSection,
        ]);

    const isActiveSection = activeSection === name;

    const hrefLink =
        name === "externalLink"
            ? pathname
            : name === "locale-switcher"
            ? getLinkLocalSwitcher(pathname)
            : getLink(pathname);

    useLayoutEffect(() => {
        setWidthSection(refContainer.current.offsetWidth + 24);
    }, []);
    const pageOrSection =
        _type === "page" || _type === "section" || _type === "externalLink";
    const modalOrLocaleSwitcher =
        _type === "modal" || _type === "locale-switcher";
    return (
        <>
            {pageOrSection && (
                <Link
                    ref={refContainer}
                    href={hrefLink}
                    className={cl(
                        className,
                        style.link,
                        isActiveSection ? style.linkActive : null
                    )}
                    onMouseEnter={() => setActiveSection(name, widthSection)}
                    onMouseLeave={() => removeActiveSection(name)}
                >
                    {sectionName}
                </Link>
            )}
            {modalOrLocaleSwitcher && (
                <div
                    className={cl(
                        className,
                        style.link,
                        isActiveSection ? style.linkActive : null
                    )}
                    onClick={() => {
                        if (_type === "modal") {
                            router.push(
                                `${currentPathname}?modal=${pathname}`,
                                { scroll: false }
                            );
                        } else {
                            changeLocaleCookies(lang);
                            router.push(hrefLink, { scroll: false });
                        }
                    }}
                    ref={refContainer}
                    onMouseEnter={() => setActiveSection(name, widthSection)}
                    onMouseLeave={() => removeActiveSection(name)}
                >
                    {sectionName}
                </div>
            )}
        </>
    );
};

export default SectionTitleLink;
