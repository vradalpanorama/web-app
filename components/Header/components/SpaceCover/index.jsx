"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useSideBarState } from "@/helpers/zustandStores/headerState";

const SpaceCover = () => {
    const [isOpenSideBar, closeSideBar] = useSideBarState((state) => [state.isOpen, state.closeSideBar]);
    return (
        <div
            className={cl(
                style.spaceCover,
                isOpenSideBar ? style.spaceCoverShow : null
            )}
            onClick={() => closeSideBar()}
        />
    );
};

export default SpaceCover;
