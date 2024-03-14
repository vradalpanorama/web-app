import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Badge = ({ className, count }) => {
    return (
        <div className={cl(className)}>
            <div className={style.badge}>{count}</div>
        </div>
    );
};

export default Badge;
