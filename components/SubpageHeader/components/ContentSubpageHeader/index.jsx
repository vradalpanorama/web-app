import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
const ContentSubpageHeader = ({ className, children }) => {
    return (
        <div className={cl(className, style.contentSubpageHeader)}>{children}</div>
    );
};

export default ContentSubpageHeader;
