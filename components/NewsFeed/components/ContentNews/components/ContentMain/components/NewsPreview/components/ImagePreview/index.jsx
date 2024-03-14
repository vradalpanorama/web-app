import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { GridArea, ImgBadge, ImgContainer } from "./components";
import Image from "next/image";
import { useMatchMedia } from "@/hooks";
import { urlFor } from "@/helpers/sanity/client";

const ImagePreview = ({ className, newsType, newsCover, imgBadge }) => {
    const { isMobile } = useMatchMedia();
    const styleMain = { objectFit: "cover", width: "100%", height: "100%" };
    const styleSecondary = {
        objectFit: "cover",
        objectPosition: "50% 50%",
        width: "100%",
        height: isMobile ? "150px" : "230px",
        borderRadius: "4px",
        aspectRatio: isMobile ? "100 / 150" : "344 / 230",
    };
    return (
        <GridArea newsType={newsType}>
            <ImgContainer newsType={newsType}>
                <Image
                    alt={newsCover["caption"]}
                    src={urlFor(newsCover).quality(100).url()}
                    style={newsType === "main" ? styleMain : styleSecondary}
                    width={1920}
                    height={1280}
                />
                {imgBadge && <ImgBadge badge={imgBadge}/>}
            </ImgContainer>
        </GridArea>
    );
};

export default ImagePreview;
