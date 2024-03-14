import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    usePromotionModalState,
    useToastModalState,
} from "@/helpers/zustandStores/modalState";

const ActionRefresh = ({ className, children }) => {
    // const [loadPromotionData] = usePromotionModalState((state) => [state.loadPromotionData]);
    const [loadPromotionData] = useToastModalState((state) => [
        state.showToast,
    ]);
    return <div onClick={() => loadPromotionData()}>{children}</div>;
};

export default ActionRefresh;
