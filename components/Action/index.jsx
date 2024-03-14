"use client";

import React from "react";
import cl from "classnames";

import style from "./index.module.scss";
import { ArrowIcon } from "@/components";
import { useTypingEffect } from "@/hooks";

const Action = ({ children, className }) => {
    // const [actionText, isActionTypingCompleted] = useTypingEffect(children, 35);
    return (
        <div
            className={cl(
                className,
                style.action
                // isActionTypingCompleted ? style.actionActive : null
            )}
        >
            {children}
            <ArrowIcon className={style.actionIcon} />
        </div>
    );
};

export default Action;
