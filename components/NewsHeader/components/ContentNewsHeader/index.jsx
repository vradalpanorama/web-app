import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
const ContentNewsHeader = ({ className, children }) => {
    return (
        <div className={cl(className, style.contentNewsHeader)}>{children}</div>
    );
};

export default ContentNewsHeader;
