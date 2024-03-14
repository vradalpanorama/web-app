"use client";

import React, { useEffect } from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useModalState } from "@/helpers/zustandStores/modalState";

const ShowModal = ({ className, children }) => {
    const [isVisibleModal] = useModalState((state) => [state.isVisibleModal]);

    useEffect(() => {
        /* remove scroll when show popup */
        if (isVisibleModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isVisibleModal]);

    return (
        <div
            className={cl(
                className,
                isVisibleModal ? style.modalContainerShow : null,
                style.modalContainer
            )}
        >
            {children}
        </div>
    );
};

export default ShowModal;
