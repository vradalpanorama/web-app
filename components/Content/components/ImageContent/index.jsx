import React from "react";

import Image from "next/image";
import { urlFor } from "@/helpers/sanity/client";

import cl from "classnames";
import style from "./index.module.scss";
import { SectionContent } from "@/components";

const ImageContent = ({className, imageBlock }) => {
    const {layoutSettings, image} = imageBlock
    return (
        <SectionContent>
            <div className={cl(className, style.imgContent)}>
                <Image
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                        aspectRatio: layoutSettings["aspectRatioFormatLayout"]
                    }}
                    src={urlFor(image).quality(100).url()}
                    alt={image.alt}
                    width={1920}
                    height={1280}
                />
            </div>
            {/* {img.description && (
                <div className={style.imgDescription}>{img.description}</div>
            )} */}
        </SectionContent>
    );
};

export default ImageContent;
