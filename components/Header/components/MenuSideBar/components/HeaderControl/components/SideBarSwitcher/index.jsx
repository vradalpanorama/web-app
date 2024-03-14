import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useSideBarState } from "@/helpers/zustandStores/headerState";
import { Icon } from "@/components";
import { useGetLang } from "@/hooks";

const SideBarSwitcher = ({ className }) => {
    const lang = useGetLang();
    const [isOpen, openSideBar, closeSideBar] = useSideBarState((state) => [
        state.isOpen,
        state.openSideBar,
        state.closeSideBar,
    ]);
    const openOrCloseSideBar = () => {
        if (isOpen) {
            closeSideBar();
        } else {
            openSideBar();
        }
    };

    const sectionName = lang === "en" ? "MENU" : "MENY";

    return (
        <div
            className={cl(className, style.switcher)}
            onClick={() => openOrCloseSideBar()}
        >
            {!isOpen && sectionName}
            {isOpen && <Icon className={style.closeIcon} type={"close-icon"} />}
        </div>
    );
};

export default SideBarSwitcher;
