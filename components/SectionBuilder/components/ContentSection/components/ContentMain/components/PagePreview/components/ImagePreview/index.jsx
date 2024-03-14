import React from "react";
import SVG from "react-inlinesvg";
import cl from "classnames";
import style from "./index.module.scss";

import { GridArea, ImgContainer, SvgContainer } from "./components";
import Image from "next/image";
import { useMatchMedia } from "@/hooks";
import { urlFor } from "@/helpers/sanity/client";

const ImagePreview = ({ className, previewType, imagePreview, lang }) => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
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
        <GridArea previewType={previewType}>
            {imagePreview?._type !== "iconPicker" && (
                <ImgContainer>
                    <Image
                        alt={imagePreview["caption"][lang]}
                        src={urlFor(imagePreview).quality(100).url()}
                        style={
                            previewType === "main" ? styleMain : styleSecondary
                        }
                        width={1920}
                        height={1280}
                    />
                </ImgContainer>
            )}
            {imagePreview?._type === "iconPicker" && (
                <SvgContainer>
                    <SVG
                        className={style.svg}
                        src={imagePreview.svg}
                        style={{
                            width: isDesktop ? "18rem" : isTablet ? "13rem" : isMobile ? "8rem" : "5rem",
                            height: isDesktop ? "18rem" : isTablet ? "13rem" : isMobile ? "8rem" : "5rem",
                        }}
                    />
                </SvgContainer>
            )}
        </GridArea>
    );
};

export default ImagePreview;
