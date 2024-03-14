import React, { Fragment } from "react";
import cl from "classnames";
import style from "./index.module.scss";
import {
    ActionCloseModal,
    ActionOpenAppPage,
    ActionOpenNewTab,
    ActionRefresh,
    Background,
    Button,
    Description,
} from "./components";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const actionComponents = {
    undefined: Fragment,
    "close-btn": ActionCloseModal,
    "app-page": ActionOpenAppPage,
    "new-tab": ActionOpenNewTab,
    "refresh": ActionRefresh,
};

const ActionArea = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const actionType = promotionData?.action?.type;

    const ActionOnClickBtn = actionComponents[actionType];
    return (
        <>
            {status !== "default" && (
                <Background>
                    <ActionOnClickBtn>
                        <Button />
                    </ActionOnClickBtn>
                    <Description />
                </Background>
            )}
        </>
    );
};

export default ActionArea;
