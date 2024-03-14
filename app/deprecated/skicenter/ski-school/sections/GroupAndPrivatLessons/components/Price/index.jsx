import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Price = ({ dictionary, isGroupPricing=false }) => {
    return (
        <div className={style.price}>
            <div
                className={cl(
                    style.priceContainer,
                    isGroupPricing ? style.priceContainerGroup : ""
                )}
            >
                <div className={style.priceSection}>
                    <span className={style.priceValue}>
                        {dictionary["price"]}
                    </span>
                    <span className={style.priceValueСurrency}>{"NOK"}</span>
                </div>
                <div className={style.pricePerPerson}>{"/pr. pers"}</div>
            </div>
            <div className={style.priceHeader}>{dictionary["title"]}</div>
        </div>
    );
};

export default Price;
