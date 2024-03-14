"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useNavigationSidebar } from "@/helpers/zustandStores/headerState";

const Container = ({ className, children }) => {
    const [removeActiveSectionParams] = useNavigationSidebar((state) => [
        state.removeActiveSectionParams,
    ]);

    return (
        <div
            onClick={() => removeActiveSectionParams()}
            className={cl(className, style.container)}
        >
            {children}
        </div>
    );
};

export default Container;
