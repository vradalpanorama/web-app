import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import Link from "next/link";

import { Container } from "./components";
import { useGetLang, useLinkGeneration } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";

const Item = ({ className, page }) => {
    const getLink = useLinkGeneration();
    const lang = useGetLang();
    const currentPathname = usePathname();
    const router = useRouter();
    const { _type } = page;

    switch (_type) {
        case "section":
            const sectionHref = getLink(page["slug"]["current"]);
            return (
                <Container>
                    <Link
                        href={sectionHref}
                        className={cl(className, style.link)}
                    >
                        {page["title"][lang]}
                    </Link>
                </Container>
            );
        case "page":
            const linkPage = page["settings"]["pathname"]["isSectionPage"]
                ? `${page["settings"]["pathname"]["section"]["slug"]["current"]}/${page["settings"]["pathname"]["slug"]["current"]}`
                : page["settings"]["pathname"]["slug"]["current"];
            const pageHref = getLink(linkPage);
            return (
                <Container>
                    <Link href={pageHref} className={cl(className, style.link)}>
                        {page["settings"]["namePage"][lang]}
                    </Link>
                </Container>
            );
        case "modal":
            return (
                <Container>
                    <div
                        onClick={() =>
                            router.push(
                                `${currentPathname}?modal=${page["settings"]["queryParameter"]["current"]}`,
                                { scroll: false }
                            )
                        }
                        className={cl(className, style.link)}
                    >
                        {page["settings"]["nameModal"][lang]}
                    </div>
                </Container>
            );
        case "externalLink":
            return (
                <Container>
                    <Link
                        href={{
                            pathname: "/redirect",
                            query: { to: page["queryParameter"]["current"] },
                        }}
                        target={page["openOnNewTab"] ? "_blank" : "_self"}
                        className={cl(className, style.link)}
                    >
                        {page["linkName"][lang]}
                    </Link>
                </Container>
            );
    }
};

export default Item;
