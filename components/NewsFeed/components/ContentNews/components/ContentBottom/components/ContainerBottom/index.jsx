import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerBottom = ({ className, children }) => {
    return (
        <div className={cl(className, style.containerBottom)}>{children}</div>
    );
};

export default ContainerBottom;
