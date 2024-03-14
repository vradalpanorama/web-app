"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useSideBarState } from "@/helpers/zustandStores/headerState";

const Container = ({ className, children }) => {
    const [isOpenSideBar] = useSideBarState((state) => [state.isOpen]);
    return (
        <div
            className={cl(
                className,
                style.container,
                isOpenSideBar ? style.containerSideBarOpen : null
            )}
        >
            {children}
        </div>
    );
};

export default Container;
