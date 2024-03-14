import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const SectionColContent = ({ children, className }) => {
    return <div className={cl(className, style.sectionColContent)}>{children}</div>;
};

export default SectionColContent;
