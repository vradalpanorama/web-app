import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Statement = ({ className, author }) => {
    const now = new Date();
    const nowYear = now.getFullYear();
    const statementText = `${nowYear} ${author}`;
    return (
        <div className={cl(className, style.statement)}>{statementText}</div>
    );
};

export default Statement;
