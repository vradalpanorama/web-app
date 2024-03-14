import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const Title = ({ children, className, type }) => {
    switch (type) {
        case "SectionMain": // font-size: 5.5rem;
            return (
                <h1
                    className={cl(
                        className,
                        style.title,
                        style.titleSectionMain
                    )}
                >
                    {children}
                </h1>
            );
        case "Section": // font-size: 4.5rem;
            return (
                <h2 className={cl(className, style.title, style.titleSection)}>
                    {children}
                </h2>
            );
        case "CallToAction":
            return ( // font-size: 3.25rem;
                <h3 className={cl(className, style.title, style.titleCallToAction)}>
                    {children}
                </h3>
            );
        case "SectionSpan": // font-size: 1rem;
            return (
                <span
                    className={cl(
                        className,
                        style.title,
                        style.titleSectionSpan
                    )}
                >
                    {children}
                </span>
            );
        case "SectionSpanWhite":
            return (
                <span
                    className={cl(
                        className,
                        style.title,
                        style.titleSectionSpan,
                        style.titleSectionSpanWhite
                    )}
                >
                    {children}
                </span>
            );

        default: // font-size: 2.75rem;
            return (
                <h4 className={cl(className, style.title, style.titleSmall)}> 
                    {children}
                </h4>
            );
    }
};

export default Title;
