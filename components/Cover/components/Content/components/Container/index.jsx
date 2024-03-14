"use client";
import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useHeaderState } from "@/helpers/zustandStores/headerState";
import { useCoverState } from "@/helpers/zustandStores/coverState";
import { useLinkGeneration } from "@/hooks";

const Container = ({ className, action, children }) => {
    const setOnCover = useHeaderState((state) => state.setOnCover);
    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: "-50px 0px 0px 0px",
    });
    const [setContentOnHover, unsetContentOnHover] = useCoverState((state) => [
        state.setContentOnHover,
        state.unsetContentOnHover,
    ]);

    useEffect(() => {
        setOnCover(inView);
    }, [inView, setOnCover]);

    const getLink = useLinkGeneration();
    const currentPathname = usePathname();
    const router = useRouter();

    const _type = action ? action?._type : undefined;

    let linkObj;
    switch (_type) {
        case "section":
            linkObj["pathname"] = getLink(action["slug"]["current"]);
            break;
        case "news":
            linkObj["pathname"] = getLink(
                action["settings"]["slug"]["current"]
            );
            break;
        case "page":
            const linkPage = action["settings"]["pathname"]["isSectionPage"]
                ? `${action["settings"]["pathname"]["section"]["slug"]["current"]}/${action["settings"]["pathname"]["slug"]["current"]}`
                : action["settings"]["pathname"]["slug"]["current"];
            linkObj["pathname"] = getLink(linkPage);
            break;
        case "externalLink":
            linkObj["pathname"] = "/redirect";
            linkObj["query"] = { to: action["queryParameter"]["current"] };
            linkObj["openOnNewTab"] = action["openOnNewTab"];
            break;
        case "modal":
            return (
                <section
                    ref={ref}
                    onMouseEnter={() => setContentOnHover()}
                    onMouseLeave={() => unsetContentOnHover()}
                    className={cl(
                        className,
                        style.container,
                        style.containerWithAction
                    )}
                    onClick={() =>
                        router.push(
                            `${currentPathname}?modal=${action["settings"]["queryParameter"]["current"]}`,
                            { scroll: false }
                        )
                    }
                >
                    {children}
                </section>
            );
        default:
            return (
                <section ref={ref} className={cl(className, style.container)}>
                    {children}
                </section>
            );
    }

    return (
        <Link
            href={{
                pathname: linkObj.pathname,
                query: linkObj?.query,
            }}
            target={linkObj?.openOnNewTab ? "_blank" : "_self"}
        >
            <section
                ref={ref}
                onMouseEnter={() => setContentOnHover()}
                onMouseLeave={() => unsetContentOnHover()}
                className={cl(
                    className,
                    style.container,
                    style.containerWithAction
                )}
            >
                {children}
            </section>
        </Link>
    );
};

export default Container;
