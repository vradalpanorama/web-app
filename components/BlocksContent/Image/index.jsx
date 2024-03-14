"use client";

import React, { useState } from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { urlFor } from "@/helpers/sanity/client";
import Image from "next/image";

import { ContainerBlock } from "../components";

const BlockImage = ({ props, desktopWidth, mobileOrder }) => {
    const [blockImageLoaded, setBlockImageLoaded] = useState(false);
    const { image, layoutSettings } = props;

    const hotspotX = image?.["hotspot"] ? image["hotspot"]["x"] * 100 : 50;
    const blockImageStyle = {
        objectPosition: `${hotspotX}% 0%`,
        objectFit: "cover",
        aspectRatio: layoutSettings["aspectRatioFormatLayout"],
    };

    return (
        <ContainerBlock
            className={style.containerImage}
            desktopWidth={desktopWidth}
            mobileOrder={mobileOrder}
        >
            <Image
                onLoad={() => setBlockImageLoaded(true)}
                style={blockImageStyle}
                className={cl(
                    style.blockImage,
                    blockImageLoaded ? style.blockImageLoaded : null
                )}
                width={1920}
                height={1280}
                src={urlFor(image).quality(100).url()}
                alt={image["alt"]}
            />
        </ContainerBlock>
    );
};

export default BlockImage;
