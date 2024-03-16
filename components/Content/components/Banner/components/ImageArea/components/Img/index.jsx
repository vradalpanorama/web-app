"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";

import cl from "classnames";
import style from "./index.module.scss";
import { useMatchMedia } from "@/hooks";

const Img = ({ className, img }) => {
    const { isMobile } = useMatchMedia();
    const styleImg = {
        // objectFit: "cover",
        // width: "100%",
        // height: "auto",
        aspectRatio: isMobile ? "1 / 1" : "16 / 9",
        objectPosition: img?.hotspot
            ? `${img.hotspot.x * 100}% ${img.hotspot.y * 100}%`
            : "50% 50%",
    };
    return (
        <Image
            style={styleImg}
            className={cl(className, style.img)}
            src={urlFor(img).quality(100).url()}
            alt={img.caption}
            width={1920}
            height={1280}
        />
    );
};

export default Img;
