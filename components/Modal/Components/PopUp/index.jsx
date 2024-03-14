"use client";

import cl from "classnames";
import style from "./index.module.scss";
import { useModalState } from "@/helpers/zustandStores/modalState";
import { useMatchMedia } from "@/hooks";
import { useEffect, useState } from "react";

const PopUp = ({ className, children }) => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const [widthPopUp, setWidthPopUp] = useState(undefined);
    const isVisibleModal = useModalState((state) => state.isVisibleModal);
    // const widthPopUp = isDesktop ? "600px" : isTablet ? "520px" : "100%";
    useEffect(() => {
        if (isDesktop) {
            setWidthPopUp("600px");
        } else if (isTablet) {
            setWidthPopUp("520px");
        } else if (isMobile) {
            setWidthPopUp("100%");
        }
    }, [isMobile, isTablet, isDesktop]);
    return (
        <div
            style={{ width: widthPopUp }}
            className={cl(
                className,
                style.popUp,
                isVisibleModal ? style.popUpShow : null
            )}
        >
            {children}
        </div>
    );
};

export default PopUp;
