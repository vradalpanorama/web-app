"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const Container = ({ className, gradient, children }) => {
    const { isMobile } = useMatchMedia();
    const imageCoverLoad = useCoverState((state) => state.imageCoverLoad);
    const { startPoint } = gradient;
    const stylesTop = {
        backgroundColor: `${startPoint["value"]}`,
    };
    const stylesBottom = {
        backgroundColor: "#ffffff",
    };

    return (
        <div className={cl(className, style.container)}>
            {isMobile && imageCoverLoad && (
                <div style={stylesTop} className={cl(style.placeholderTop)} />
            )}
            {isMobile && imageCoverLoad && (
                <div
                    style={stylesBottom}
                    className={cl(style.placeholderBottom)}
                />
            )}
            {children}
        </div>
    );
};

export default Container;
