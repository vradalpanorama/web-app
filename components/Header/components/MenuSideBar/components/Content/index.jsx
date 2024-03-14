"use client";

import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useSideBarState } from "@/helpers/zustandStores/headerState";

const Content = ({ className, children }) => {
    const [isOpenSideBar] = useSideBarState((state) => [state.isOpen]);
    return (
        <nav
            className={cl(
                className,
                style.content,
                isOpenSideBar ? style.contentSideBarOpen : null
            )}
        >
            {children}
        </nav>
    );
};

export default Content;
