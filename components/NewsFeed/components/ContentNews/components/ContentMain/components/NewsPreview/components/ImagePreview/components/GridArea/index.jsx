import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const GridArea = ({ className, newsType, children }) => {
    return (
        <div
            className={cl(
                className,
                style.gridArea,
                newsType === "main" ? style.gridAreaMain : null,
                newsType === "secondary" ? style.gridAreaSecondary : null
            )}
        >
            {children}
        </div>
    );
};

export default GridArea;
