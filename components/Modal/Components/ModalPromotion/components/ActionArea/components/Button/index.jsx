import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const Button = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);
    console.log('status', status);
    console.log('promotionData', promotionData);
    const isLoading = status === "loading";
    const buttonName = isLoading ? "" : promotionData["action"]["content"]["button"];

    return (
        <div
            className={cl(
                style.button,
                isLoading ? style.buttonLoading : style.buttonActive
            )}
        >
            {buttonName}
        </div>
    );
};

export default Button;
