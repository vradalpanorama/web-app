"use client";

import React, { useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";

const ImgCoverSubpageHeader = ({ className, img, lang }) => {
    const [isLoadedImage, setLoadedImage] = useState(false);

    const styleImg = {
        objectFit: "cover",
        width: "100%",
        height: "auto",
        objectPosition: img.hotspot ? `50% ${img.hotspot.y * 100}%` : null,
        borderRadius: "1.75rem",
        aspectRatio: "16 / 9",
    };

    return (
        <div
            className={cl(
                className,
                style.imgCoverSubpageHeader,
                isLoadedImage ? style.imgCoverSubpageHeaderLoaded : null
            )}
        >
            <Image
                style={styleImg}
                src={urlFor(img).quality(100).url()}
                alt={img.caption[lang]}
                width={1920}
                height={1280}
                className={cl(
                    style.image,
                    isLoadedImage ? style.imageLoaded : null
                )}
                onLoad={() => setLoadedImage(true)}
            />
        </div>
    );
};

export default ImgCoverSubpageHeader;
