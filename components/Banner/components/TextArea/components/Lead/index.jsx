import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Lead = ({ className, lead }) => {
    return <div className={cl(className, style.lead)}>{lead}</div>;
};

export default Lead;
