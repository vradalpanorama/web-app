"use client";

import React from "react";
import { useParams } from "next/navigation";

import cl from "classnames";
import style from "./index.module.scss";
import { useScrollOnTop } from "@/hooks";

const titleAttr = {
    en: "Scroll to the top",
    no: "Bla til toppen",
};

const Logotype = ({ className, children }) => {
    const { lang } = useParams();
    const scrollOnTop = useScrollOnTop();

    return (
        <div
            className={cl(className, style.logotype)}
            title={titleAttr?.[lang]}
            onClick={scrollOnTop}
        >
            {children}
        </div>
    );
};

export default Logotype;
