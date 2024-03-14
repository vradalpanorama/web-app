"use client";
import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { useWidgetState } from "@/helpers/zustandStores/widgetState";

const ScrollButton = ({ className }) => {
    const [leftPartEdge, scrollToAnotherEdge] = useWidgetState((state) => [
        state.leftPartEdge,
        state.scrollToAnotherEdge,
    ]);

    return (
        <div
            onClick={() => scrollToAnotherEdge()}
            className={style.containerScrollButton}
        >
            <Icon
                type={"arrow"}
                className={cl(
                    className,
                    style.arrow,
                    leftPartEdge === "right" ? style.arrowRight : null,
                    leftPartEdge === "left" ? style.arrowLeft : null
                )}
            />
        </div>
    );
};

export default ScrollButton;
