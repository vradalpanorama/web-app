import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import Link from "next/link";

const SectionContent = ({ children, className, isColsType, link = null }) => {
    return (
        <>
            {!link && (
                <div
                    className={cl(
                        className,
                        style.sectionContent,
                        isColsType ? style.sectionContentCols : ""
                    )}
                >
                    {children}
                </div>
            )}
            
            {link && (
                <Link
                    href={link}
                    className={cl(
                        className,
                        style.sectionContent,
                        isColsType ? style.sectionContentCols : ""
                    )}
                >
                    {children}
                </Link>
            )}
        </>
    );
};

export default SectionContent;
