import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const ContainerSection = ({ className, children }) => {
    return (
        <section className={cl(className, style.containerSection)}>
            {children}
        </section>
    );
};

export default ContainerSection;
