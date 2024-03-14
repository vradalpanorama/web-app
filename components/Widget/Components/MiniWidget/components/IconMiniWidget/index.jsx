import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";

const IconMiniWidget = ({ className }) => {
    return (
        <div className={cl(className, style.iconContainer)}>
            <Icon type={"explore"} className={style.iconExplore} />
        </div>
    );
};

export default IconMiniWidget;
