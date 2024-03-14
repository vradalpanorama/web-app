"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/helpers/sanity/client";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang, useMatchMedia } from "@/hooks";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const Img = ({ className, img }) => {
    const [imageCoverLoad, setImageCoverLoad] = useCoverState((state) => [
        state.imageCoverLoad,
        state.setImageCoverLoad,
    ]);
    // const { isMobile } = useMatchMedia();
    const lang = useGetLang()
    const hotspotX = img?.hotspot?.x ? img?.hotspot?.x * 100 : 50;

    const imageStyle = {
        objectPosition: `${hotspotX}% 0%`,
        objectFit: "cover",
    };

    return (
        <Image
            style={imageStyle}
            onLoad={() => setImageCoverLoad(true)}
            className={cl(
                className,
                style.img,
                imageCoverLoad ? style.imgLoaded : null
            )}
            src={urlFor(img).quality(100).url()}
            alt={img?.caption ? img.caption[lang] : 'img'}
            width={1920}
            height={1280}
            priority
        />
    );
};

export default Img;
