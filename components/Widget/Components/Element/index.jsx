"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Element = ({
    row,
    column,
    typeParametrs,
    sectionParametrs,
    className,
    children,
}) => {
    // const pathname = usePathname();
    // const query = `${typeParametrs}=${sectionParametrs}`;
    // const href = `${pathname}?${query}`;
    const router = useRouter();
    return (
        // <Link href={href} scroll={false} className={style.elementLink}>
        <li
            className={cl(
                className,
                style.element,
                row ? style.elementRow : null,
                column ? style.elementColumn : null
            )}
            onClick={() => {
                if (typeParametrs === "promo") {
                    router.push(
                        sectionParametrs === "accommodation"
                            ? "/accommodation"
                            : "/redirect?to=book-skipass"
                    );
                }
            }}
        >
            {children}
        </li>
        // </Link>
    );
};

export default Element;
