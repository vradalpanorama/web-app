import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useToastModalState } from "@/helpers/zustandStores/modalState";

const Pod = ({ className, children }) => {
    return (
        <div
            className={cl(className, style.pod)}
        >
            {children}
        </div>
    );
};

export default Pod;
