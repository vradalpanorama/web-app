import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ContainerBlock = ({
    className,
    children,
    desktopWidth,
    mobileOrder,
    desktopAlign,
}) => {
    return (
        <div
            className={cl(
                className,
                style.containerImage,
                desktopWidth === "30"
                    ? style.containerDesktopWidth30
                    : desktopWidth === "40"
                    ? style.containerDesktopWidth40
                    : desktopWidth === "50"
                    ? style.containerDesktopWidth50
                    : desktopWidth === "60"
                    ? style.containerDesktopWidth60
                    : null,
                desktopAlign === "flex-start"
                    ? style.containerDesktopAlignTop
                    : desktopAlign === "center"
                    ? style.containerDesktopAlignCenter
                    : desktopAlign === "flex-end"
                    ? style.containerDesktopAlignBottom
                    : null,
                mobileOrder === "1"
                    ? style.containerMobileOrder1
                    : mobileOrder === "2"
                    ? style.containerMobileOrder2
                    : null
            )}
        >
            {children}
        </div>
    );
};

export default ContainerBlock;
