import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Lead = ({ children, className, color }) => {
    return (
        <p
            className={cl(className, style.lead)}
            style={{
                color: color ? color : "var(--text-black)",
            }}
        >
            {children}
        </p>
    );
};

export default Lead;
