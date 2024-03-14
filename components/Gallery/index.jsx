"use client";
import {
    GalleryContainer,
    GalleryMain,
    GalleryNavigation,
    // GalleryDots,
} from "@/components/_componentsGallery";

import { images } from "./images";

import { useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Gallery = ({
    // images,
    dictionary,
    className,
}) => {
    const [indexActiveImage, setIndexActiveImage] = useState(0);
    const prevImage = images[indexActiveImage - 1];
    const activeImage = images[indexActiveImage];
    const nextImage = images[indexActiveImage + 1];

    if (!images.length) {
        return null;
    }
    return (
        <div className={cl(className, style.gallery)}>
            <GalleryContainer>
                <GalleryMain
                    prevPhoto={prevImage}
                    activePhoto={activeImage}
                    nextPhoto={nextImage}
                    dictionary={dictionary}
                    indexActiveImage={indexActiveImage}
                />

                <GalleryNavigation
                    className={style.galleryNavigation}
                    disabledPrev={!prevImage}
                    disabledNext={!nextImage}
                    onPrevClick={() => {
                        setIndexActiveImage(indexActiveImage - 1);
                    }}
                    onNextClick={() => {
                        setIndexActiveImage(indexActiveImage + 1);
                    }}
                />

                {/* <GalleryDots
                    className={style.galleryDots}
                    dots={images.length}
                    indexActiveImage={indexActiveImage}
                /> */}
            </GalleryContainer>
        </div>
    );
};

export default Gallery;
