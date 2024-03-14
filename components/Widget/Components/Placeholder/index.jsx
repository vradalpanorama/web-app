"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useWidgetState } from "@/helpers/zustandStores/widgetState";
import cl from "classnames";

import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";

const Placeholder = ({ className }) => {
    const { setPosition } = useWidgetState((state) => state);
    const { isMobile } = useMatchMedia();
    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: isMobile ? "1000000px 0px -45px 0px" : "1000000px 0px -16px 0px",
    });
    useEffect(() => {
        setPosition(inView);
    }, [inView]);

    return <div ref={ref} className={cl(className, style.placeholder)}></div>;
};

export default Placeholder;
