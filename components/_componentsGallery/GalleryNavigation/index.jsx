import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const GalleryNavigation = ({
    disabledPrev,
    disabledNext,
    onPrevClick,
    onNextClick,
    className,
}) => {
    return (
        <div className={cl(style.galleryNavigation, className)}>
            <button
                disabled={disabledPrev}
                className={cl(
                    style.galleryNavigationBtn,
                    style.galleryNavigationBtnLeft
                )}
                onClick={onPrevClick}
            >
                Previous photo
            </button>
            <button
                disabled={disabledNext}
                className={cl(
                    style.galleryNavigationBtn,
                    style.galleryNavigationBtnRight
                )}
                onClick={onNextClick}
            >
                Next photo
            </button>
        </div>
    );
};

export default GalleryNavigation;
