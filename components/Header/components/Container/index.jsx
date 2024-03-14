"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useHeaderState, useSideBarState } from "@/helpers/zustandStores/headerState";
import cl from "classnames";

import style from "./index.module.scss";

const Container = ({ children, className }) => {
    const [onCover, onContent] = useHeaderState((state) => [
        state.onCover,
        state.onContent,
    ]);
    const [isOpenSidebar] = useSideBarState((state) => [state.isOpen])
    const headerNode = useRef(null);
    const [isShowHeader, setShowHeader] = useState(true);

    useLayoutEffect(() => {
        if (!headerNode) {
            return;
        }
        if (onCover && !isOpenSidebar) {
            document.documentElement.style.setProperty(
                "--header__nav-item--background-selected",
                "rgba(250,250,250, 0.15)"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--color-selected",
                "#fff"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--background-hover",
                "rgba(255,255,255, 0.3)"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--color-hover",
                "#fff"
            );

            headerNode.current.classList.remove(style.headerOnContent);
            headerNode.current.classList.add(style.headerOnCover);
            setShowHeader(onCover);
        } else if (onContent || isOpenSidebar) {
            document.documentElement.style.setProperty(
                "--header__nav-item--background-selected",
                "#f2f2f2"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--color-selected",
                "#46545b"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--background-hover",
                "#e5f6ff"
            );
            document.documentElement.style.setProperty(
                "--header__nav-item--color-hover",
                "#0b7ec1"
            );

            headerNode.current.classList.remove(style.headerOnCover);
            headerNode.current.classList.add(style.headerOnContent);
            if (!isOpenSidebar) {
                const setTimeoutID = setTimeout(() => {
                    setShowHeader(onContent);
                    clearTimeout(setTimeoutID);
                }, 1000);
            }
            
        } else {
            setShowHeader(false);
        }

    }, [onCover, onContent, isOpenSidebar]);

    return (
        <header
            className={cl(style.header, className)}
            ref={headerNode}
            style={{
                transform: isShowHeader
                    ? "translateY(0px)"
                    : "translateY(-85px)",
            }}
        >
            {children}
        </header>
    );
};

export default Container;
