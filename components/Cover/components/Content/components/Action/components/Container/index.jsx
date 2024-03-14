"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const Container = ({ className, children, isAction }) => {
    const [imageCoverLoad, contentOnHover] = useCoverState((state) => [
        state.imageCoverLoad,
        state.contentOnHover,
    ]);

    return (
        <div
            className={cl(
                className,
                style.container,
                isAction ? style.containerAction : null,
                imageCoverLoad ? style.containerActionAttention : null,
                contentOnHover ? style.containerActionHover : null
            )}
        >
            {children}
        </div>
    );
};

export default Container;
