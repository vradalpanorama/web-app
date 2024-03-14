"use client";
import React, { useReducer } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Lead, Title } from "@/components";
import { Price } from "..";


const Group = ({ dictionary }) => {
    const prices = dictionary["pricing"]["prices"];

    const intialState = { index: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case prices[0]["category"]["name"]:
                return { index: 0 };
            case prices[1]["category"]["name"]:
                return { index: 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div className={style.group}>
            <div className={style.groupText}>
                <Title>{dictionary["title"]}</Title>
                <Lead>{dictionary["lead"]}</Lead>
            </div>
            <div className={style.groupPricing}>
                <div className={style.groupPricingCategory}>
                        {prices.map((priceObj, key) => {
                            return (
                                <button
                                    key={key}
                                    onClick={() =>
                                        dispatch({
                                            type: priceObj["category"]["name"],
                                        })
                                    }
                                    className={cl(
                                        style.groupPricingCategoryButton,
                                        state.index === key
                                            ? style.groupPricingCategoryButtonActive
                                            : ""
                                    )}
                                >
                                    {priceObj["category"]["title"][0]}
                                </button>
                            );
                        })}
                    </div>
                <div className={style.groupPricingPrice}>
                    {prices[state.index]["priceDescription"].map(
                        (price, key) => {
                            return <Price key={key} dictionary={price} isGroupPricing={true}/>;
                        }
                    )}
                </div>

                <div className={style.groupPricingCategoryInfo}>
                    {dictionary["pricing"]["info"]["span"]}
                </div>
            </div>
        </div>
    );
};

export default Group;
