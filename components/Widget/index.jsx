"use client";

import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import {
    ContainerArea,
    Placeholder,
    LargeWidget,
    MiniWidget,
} from "./Components";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";
import { useWidgetServiceSectionDataState } from "@/helpers/zustandStores/widgetState";
import { useMatchMedia } from "@/hooks";

const Widget = () => {
    const [statusI18nState] = useInternationalizationState((state) => [
        state.status,
    ]);
    const [status, loadServiceData] = useWidgetServiceSectionDataState(
        (state) => [state.status, state.loadWidgeServiceSectionData]
    );
    const { isMobile } = useMatchMedia();

    useEffect(() => {
        if (status !== 'success') {
            loadServiceData();
        }
    }, [loadServiceData]);

    return (
        <div className={style.widget}>
            <Placeholder />
            <ContainerArea>
                {statusI18nState === "ready" && !isMobile && <LargeWidget />}
                {statusI18nState === "ready" && isMobile && <MiniWidget />}
            </ContainerArea>
        </div>
    );
};

export default Widget;
