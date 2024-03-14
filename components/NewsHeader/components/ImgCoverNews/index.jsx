import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";
import { useMatchMedia } from "@/hooks";

const ImgCoverNews = ({ className, img }) => {
    const styleImg = {
        objectFit: "cover",
        width: "100%",
        height: "auto",
        objectPosition: img?.hotspot
            ? `50% ${img.hotspot.y * 100}%`
            : "50% 50%",
    };

    return (
        <div className={cl(className, style.imgCoverNews)}>
            <Image
                style={styleImg}
                src={urlFor(img).quality(100).url()}
                alt={img.caption}
                width={1920}
                height={1280}
            />
        </div>
    );
};

export default ImgCoverNews;
