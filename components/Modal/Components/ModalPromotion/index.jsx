import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";
import {
    ActionArea,
    ContentArea,
    HeadIcon,
    HeadTitle,
    ModalContainer,
} from "./components";
import { useGetLang } from "@/hooks";

const ModalPromotion = ({ className, slug }) => {
    const lang = useGetLang();

    const [status, loadPromotionData] = usePromotionModalState((state) => [
        state.status,
        state.loadPromotionData,
    ]);
    useEffect(() => {
        loadPromotionData(slug, lang);
    }, [slug, lang, loadPromotionData]);

    return (
        <ModalContainer>
            <HeadIcon />
            <HeadTitle />
            <ContentArea />
            <ActionArea />
        </ModalContainer>
    );
};

export default ModalPromotion;
