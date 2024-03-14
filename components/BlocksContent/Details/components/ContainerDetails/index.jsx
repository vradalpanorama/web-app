"use client";

import React, { useLayoutEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";

const ContainerDetails = ({
    className,
    children,
    desktopWidth,
    desktopAlign,
    mobileOrder,
}) => {
    const { isMobile } = useMatchMedia();

    const [mobile, setMobile] = useState(false);

    useLayoutEffect(() => {
        if (isMobile) {
            setMobile(true);
        }
        if (!isMobile) {
            setMobile(false);
        }
    }, [isMobile]);

    return (
        <div
            style={{
                width: mobile ? '100%' : `${desktopWidth}%`,
                justifyContent: desktopAlign,
                order: mobileOrder,
            }}
            className={cl(className, style.containerDetails)}
        >
            {children}
        </div>
    );
};

export default ContainerDetails;
