import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const SectionContent = ({ className, children }) => {
    return (
        <section className={cl(className, style.section)}>{children}</section>
    );
};

export default SectionContent;
