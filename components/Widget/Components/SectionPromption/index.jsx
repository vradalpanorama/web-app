import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { ContainerElements } from "..";
import { PromotionElement } from "./components";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const SectionPromption = () => {
    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const promotionSection = getCurrentDictionary("widget")["promotionSection"];

    return (
        <ContainerElements row>
            {promotionSection.map((element, key) => (
                <PromotionElement key={key} element={element} />
            ))}
        </ContainerElements>
    );
};

export default SectionPromption;
