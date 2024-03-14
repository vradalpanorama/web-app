import React, { Fragment } from "react";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

import cl from 'classnames';
import style from './index.module.scss';

const Description = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);
    const isLoading = status === "loading";
    const descriptions = isLoading
        ? null
        : promotionData["action"]["content"]["description"];

    return (
        <div className={style.descriptionContainer}>
            {!isLoading &&
                descriptions.map((desc, key) => (
                    <p key={key} className={style.description}>
                        {desc}
                    </p>
                ))}
        </div>
    );
};

export default Description;
