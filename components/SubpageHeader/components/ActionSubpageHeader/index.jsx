import React from "react";
import { Icon } from "@/components";

import cl from "classnames";
import style from "./index.module.scss";

const ActionSubpageHeader = ({ className }) => {
    return (
        <div className={cl(className, style.actionContainer)}>
            <span className={style.actionText}></span>
            <Icon type={"arrow"} />
        </div>
    );
};

export default ActionSubpageHeader;
