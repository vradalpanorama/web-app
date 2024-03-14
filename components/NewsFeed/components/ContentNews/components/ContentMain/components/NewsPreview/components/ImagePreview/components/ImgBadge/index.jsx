"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";

const ImgBage = ({ className, badge }) => {
    return (
        <div className={cl(className, style.imgBadge)}>
            {badge}
        </div>
    );
};

export default ImgBage;
