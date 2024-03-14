"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ArrowIcon } from "..";
import { useParams } from "next/navigation";

const ReadMore = ({
    children,
    isWhite = false,
    isActive = false,
    className,
}) => {
    const params = useParams();
    const description = children
        ? children
        : params.lang === "no"
        ? "Les mer"
        : params.lang === "en"
        ? "Learn more"
        : "";
    return (
        <div
            className={cl(
                className,
                style.readMore,
                isWhite ? style.readMoreColorWhite : style.readMoreColor,
                isActive ? style.readMoreActive : ""
            )}
        >
            {description}
            <ArrowIcon
                className={cl(
                    style.readMoreArrow,
                )}
            />
        </div>
    );
};

export default ReadMore;
