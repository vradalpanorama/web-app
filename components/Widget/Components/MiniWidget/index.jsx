import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    ContainerMiniWidget,
    ContentMiniWidget,
    IconMiniWidget,
    PromoSection,
} from "./components";
import { Icon } from "@/components";

const MiniWidget = () => {
    return (
        <>
            {/* <PromoSection /> */}
            <ContainerMiniWidget>
                <IconMiniWidget />
                <ContentMiniWidget />
                {/* <Icon type={"arrow"} className={style.arrowIcon} /> */}
            </ContainerMiniWidget>
        </>
    );
};

export default MiniWidget;
