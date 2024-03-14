"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const ActionText = ({ className, text }) => {
    const [imageCoverLoad, contentOnHover] = useCoverState((state) => [state.imageCoverLoad, state.contentOnHover,]);

    return (
        <span
            className={cl(
                className,
                style.actionText,
                imageCoverLoad ? style.actionTextDecoration : null,
                contentOnHover ? style.actionTextDecorationOnHover : null,
            )}
        >
            {text}
        </span>
    );
};

export default ActionText;
