import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContentArea = ({ className, children }) => {
    return (
        <ul className={cl(className, style.content)}>
            {children}
        </ul>
    );
};

export default ContentArea;
