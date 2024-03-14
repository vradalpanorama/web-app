"use client";
import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const Container = ({ className, children }) => {
    const rndInt = Math.floor(Math.random() * 5) + 1;
    const animationsStyles = [
        style.containerAnimation1,
        style.containerAnimation2,
        style.containerAnimation3,
        style.containerAnimation4,
        style.containerAnimation5,
    ];
    const [imageCoverLoad] = useCoverState((state) => [state.imageCoverLoad]);

    return (
        <div
            className={cl(
                className,
                style.container,
                imageCoverLoad
                    ? style.containerLoaded
                    : animationsStyles[rndInt - 1]
            )}
        >
            {children}
        </div>
    );
};

export default Container;
