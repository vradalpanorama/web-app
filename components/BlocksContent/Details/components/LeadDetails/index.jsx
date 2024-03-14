import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const LeadDetails = ({ className, lead }) => {
    return <div className={cl(className, style.leadDetails)}>{lead}</div>;
};

export default LeadDetails;
