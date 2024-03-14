import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang, useLocalSwitcher } from "@/hooks";
import { useRouter } from "next/navigation";

const LocaleSwitcher = ({ className }) => {
    const [getLinkLocalSwitcher, changeLocaleCookies] = useLocalSwitcher();
    const lang = useGetLang();
    const router = useRouter();

    const sectionName = lang === "en" ? "NOR" : "ENG";
    const pathname = lang === "en" ? "/" : "en";

    const hrefLink = getLinkLocalSwitcher(pathname);
    return (
        <div
            href={hrefLink}
            className={cl(className, style.switcher)}
            onClick={() => {
                changeLocaleCookies(lang);
                router.push(hrefLink);
            }}
        >
            {sectionName}
        </div>
    );
};

export default LocaleSwitcher;
