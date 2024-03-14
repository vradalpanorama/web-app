import React, { Fragment } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { Icon } from "@/components";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const Error = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    return (
        <Fragment>
            <Icon type={"status-500"} className={style.status500} />
            <div className={style.paragraphContainer}>
                {promotionData.content.map((paragraph, key) => (
                    <p key={key} className={style.paragraph}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </Fragment>
    );
};

export default Error;
