import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const GridArea = ({ className, previewType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.gridArea,
                previewType === "main" ? style.gridAreaMain : null,
                previewType === "secondary" ? style.gridAreaSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default GridArea;
