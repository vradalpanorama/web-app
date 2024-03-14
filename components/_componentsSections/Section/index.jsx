import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Section = ({ children, className, isGapMountains }) => {
    return (
        <section
            className={cl(
                className,
                style.section,
                isGapMountains ? style.sectionGapMountains : style.sectionGap
            )}
        >
            {children}
        </section>
    );
};

export default Section;
