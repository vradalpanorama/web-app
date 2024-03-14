"use client";

import React, { useEffect, useRef } from "react";
import cl from "classnames";

import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";
import { ScrollButton } from "./components";
import { useWidgetState } from "@/helpers/zustandStores/widgetState";

const ContenSpace = ({ className, leftPart, rightPart, children }) => {
    const [
        leftPartEdge,
        setLeftPartEdge,
        scrollStatus,
        scrollToAnotherEdgeDone,
    ] = useWidgetState((state) => [
        state.leftPartEdge,
        state.setLeftPartEdge,
        state.scrollStatus,
        state.scrollToAnotherEdgeDone,
    ]);
    const { isMobile } = useMatchMedia();
    const leftPartRef = useRef();

    useEffect(() => {
        if (leftPartRef && leftPartRef.current && scrollStatus === "scroll") {
            const offsetWidth = leftPartRef.current.offsetWidth * 10;

            leftPartRef.current.scrollTo({
                left: leftPartEdge === "right" ? 0 : offsetWidth,
                behavior: "smooth",
            });

            scrollToAnotherEdgeDone();
        }
    }, [leftPartRef, scrollStatus, leftPartEdge, scrollToAnotherEdgeDone]);

    return (
        <div
            ref={leftPart ? leftPartRef : null}
            onScroll={() => {
                const a = leftPartRef?.current?.scrollLeft;
                const b =
                    leftPartRef?.current?.scrollWidth -
                    leftPartRef?.current?.offsetWidth;
                if (a / b > 0.95) {
                    setLeftPartEdge("right");
                } else {
                    setLeftPartEdge("left");
                }
            }}
            className={cl(
                className,
                style.contentSpace,
                leftPart ? style.contentSpaceLeft : null,
                rightPart ? style.contentSpaceRight : null
            )}
        >
            {children}

            {/* {rightPart && <ScrollButton />} */}
        </div>
    );
};

export default ContenSpace;
