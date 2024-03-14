import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const ActionOpenNewTab = ({ className, children }) => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const link = promotionData["action"]["content"]["href"];

    return (
        <a href={link} target="_blank">
            {children}
        </a>
    );
};

export default ActionOpenNewTab;
