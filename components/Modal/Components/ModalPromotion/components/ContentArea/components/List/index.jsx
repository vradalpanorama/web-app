import React from "react";

import cl from 'classnames';
import style from './index.module.scss';

import { Icon } from "@/components";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";

const List = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const list = promotionData.content.contentItems;

    return list.map((item, key) => (
        <div key={key} className={style.featurePlaceholder}>
            <div className={style.featureIconPlaceholder}>
                <Icon
                    type={item.iconType}
                    className={style.featureIcon}
                />
            </div>
            <div className={style.featureText}>
                <p className={style.featureTextTitle}>{item.title}</p>
                <p className={style.featureTextLead}>{item.lead}</p>
            </div>
        </div>
    ));
};

export default List;
