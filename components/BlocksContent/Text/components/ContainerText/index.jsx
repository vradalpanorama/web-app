"use client";
import React, { useLayoutEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";

const ContainerText = ({
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
    }, []);


    return (
        <div
            className={cl(className, style.containerText)}
            style={{
                width: mobile ? "100%" : `${desktopWidth}%`,
                justifyContent: desktopAlign,
                order: mobile ? mobileOrder : null,
            }}
        >
            {children}
        </div>
    );
};

export default ContainerText;
