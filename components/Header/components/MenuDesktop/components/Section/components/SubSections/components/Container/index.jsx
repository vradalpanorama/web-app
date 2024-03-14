"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useNavigationDesktop } from "@/helpers/zustandStores/headerState";

const Container = ({
    className,
    children,
    leftPosition,
    rightPosition,
    centerPosition,
}) => {
    const [
        activeSection,
        activeSectionWidth,
        setActiveSection,
        removeActiveSection,
    ] = useNavigationDesktop((state) => [
        state.activeSection,
        state.activeSectionWidth,
        state.setActiveSection,
        state.removeActiveSection,
    ]);
    return (
        <nav
            className={cl(
                className,
                style.container,
                leftPosition ? style.containerLeftPosition : null,
                rightPosition ? style.containerRightPosition : null,
                centerPosition ? style.containerCenterPosition : null
            )}
            style={{ minWidth: `${activeSectionWidth}px` }}
            onMouseEnter={() => setActiveSection(activeSection)}
            onMouseLeave={() => removeActiveSection(activeSection)}
        >
            {children}
        </nav>
    );
};

export default Container;
