import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";

const ElementIcon = ({ className, type }) => {
    return <Icon className={cl(className, style.icon)} type={type} />;
};

export default ElementIcon;
