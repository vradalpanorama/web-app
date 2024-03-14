"use client";

import { Fragment, useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { useSearchParams } from "next/navigation";
import {
    BackgroundArea,
    CloseIcon,
    ModalPromotion,
    ShowModal,
    PopUp,
    Toast,
} from "./Components";
import { useModalState } from "@/helpers/zustandStores/modalState";

const Modal = () => {
    const [openModal, closeModal, type, slug] = useModalState((state) => [state.openModal, state.closeModal, state.type, state.slug]);
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const map = searchParams.get("map");
    useEffect(() => {
        if (modal) {
            openModal({
                type: "modal",
                slug: modal,
            });
        } else if (map) {
            openModal({
                type: "map",
                slug: map,
            });
        } else {
            closeModal()
        }
    }, [modal, map, openModal, closeModal]);

    return (
        <ShowModal>
            <PopUp>
                <Toast />
                <CloseIcon />
                {type === 'modal' && <ModalPromotion slug={slug} />}
                {/* {parametrs.type === "service" && (
                    <ResortService section={parametrs.section} />
                )} */}
            </PopUp>
            <BackgroundArea />
        </ShowModal>
    );
};

export default Modal;
