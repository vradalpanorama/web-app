import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const SectionCol = ({ children, className, isLeftPart = false }) => {
    return (
        <div
            className={cl(
                className,
                style.sectionCol,
                isLeftPart ? style.sectionColLeft : style.sectionColRight
            )}
        >
            {children}
        </div>
    );
};

export default SectionCol;
