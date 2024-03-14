import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const List = ({ className, children, mainPart, sidePart }) => {
    return (
        <ul
            className={cl(
                className,
                style.list,
                mainPart ? style.listMainPart : null,
                sidePart ? style.listSidePart : null
            )}
        >
            {children}
        </ul>
    );
};

export default List;
