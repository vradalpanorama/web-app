import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const ContainerElements = ({ className, children, column, row }) => {
    return (
        <ul
            className={cl(
                style.containerElements,
                column ? style.containerElementsColumn : null,
                row ? style.containerElementsRow : null
            )}
        >
            {children}
        </ul>
    );
};

export default ContainerElements;
