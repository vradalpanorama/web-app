import React from "react";
import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";

import cl from "classnames";
import style from "./index.module.scss";

const Img = ({ className, src, alt }) => {
    return (
        <Image
            className={cl(className, style.img)}
            src={urlFor(src).quality(100).url()}
            alt={alt}
            width={1920}
            height={1280}
        />
    );
};

export default Img;
