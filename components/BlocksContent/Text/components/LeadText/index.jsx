import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const LeadText = ({ className, lead }) => {
    return <div className={cl(className, style.leadText)}>{lead}</div>;
};

export default LeadText;
