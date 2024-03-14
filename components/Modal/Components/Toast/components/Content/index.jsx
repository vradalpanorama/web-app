import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Content = ({ className, title, lead }) => {
    return (
        <div className={cl(className, style.content)}>
            <span className={style.contentTitle}>{title}</span>
            <span className={style.contentLead}>{lead}</span>
        </div>
    );
};

export default Content;
