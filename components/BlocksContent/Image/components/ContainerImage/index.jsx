"use client";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerImage = ({ className, children, desktopWidth, mobileOrder }) => {
    return (
        <div
            className={cl(
                className,
                style.containerImage,
                desktopWidth === "30"
                    ? style.containerImageDesktopWidth30
                    : desktopWidth === "40"
                    ? style.containerImageDesktopWidth40
                    : desktopWidth === "50"
                    ? style.containerImageDesktopWidth50
                    : desktopWidth === "60"
                    ? style.containerImageDesktopWidth60
                    : null,
                mobileOrder === "1"
                    ? style.containerImageMobileOrder1
                    : mobileOrder === "2"
                    ? style.containerImageMobileOrder2
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerImage;
