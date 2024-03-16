import React from "react";
import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";

import cl from "classnames";
import style from "./index.module.scss";

const Img = ({ className, img }) => {
    const styleImg = {
        // objectFit: "cover",
        // width: "100%",
        // height: "auto",
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
