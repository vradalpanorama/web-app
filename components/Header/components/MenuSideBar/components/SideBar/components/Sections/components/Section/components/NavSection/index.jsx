"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";

import { useNavigationSidebar } from "@/helpers/zustandStores/headerState";
import { useGetLang } from "@/hooks";

const NavSection = ({ className, sectionObj }) => {
    // const { params } = sectionObj;
    const lang = useGetLang();
    const sectionName = sectionObj['title'][lang];


    const [setActiveSectionParams] = useNavigationSidebar((state) => [
        state.setActiveSectionParams,
    ]);
    return (
        <div
            onClick={() => setActiveSectionParams(sectionObj)}
            className={cl(className, style.nav)}
        >
            {sectionName}
            <Icon type={"arrow"} className={style.arrow} />
        </div>
    );
};

export default NavSection;
