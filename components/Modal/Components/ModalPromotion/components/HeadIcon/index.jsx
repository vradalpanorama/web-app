import React, { Fragment } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const statusClassName = {
    loading: style.loading,
    error: style.error,
    success: style.success,
};

const HeadIcon = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const typeIcon =
        status === "success"
            ? promotionData.iconType
            : status === "error"
            ? "error-icon"
            : status === "loading"
            ? "loading-sun"
            : null;

    return (
        <>
            <Icon className={statusClassName[status]} type={typeIcon} />
        </>
    );
};

export default HeadIcon;
