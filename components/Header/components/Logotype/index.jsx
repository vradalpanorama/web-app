"use client";
import React from "react";
import Link from "next/link";
import cl from "classnames";

import style from "./index.module.scss";
import { useParams } from "next/navigation";
import { Icon } from "@/components";

const Logotype = ({ children, className }) => {
    const params = useParams();
    const link = params.lang ? `/${params.lang}/` : "/";
    return (
        <Link href={link} className={cl(style.logo, className)}>
            <Icon type={"logo-sun-color"} className={style.logoSun} />
            <Icon
                type={"logo-vradal-panorama"}
                className={style.logoVradalPanorama}
            />
        </Link>
    );
};

export default Logotype;
