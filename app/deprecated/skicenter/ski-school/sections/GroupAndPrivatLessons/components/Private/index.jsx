"use client";
import React, { useReducer } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Lead, Title } from "@/components";
import { Price } from "..";


const Privat = ({ dictionary }) => {
    const prices = dictionary["pricing"]["prices"];

    const intialState = { index: 2 };

    function reducer(state, action) {
        switch (action.type) {
            case prices[0]["category"]["name"]:
                return { index: 0 };
            case prices[1]["category"]["name"]:
                return { index: 1 };
            case prices[2]["category"]["name"]:
                return { index: 2 };
            case prices[3]["category"]["name"]:
                return { index: 3 };
            default:

                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div className={style.privat}>
            <div className={style.privatText}>
                <Title>{dictionary["title"]}</Title>
                <Lead>{dictionary["lead"]}</Lead>
            </div>
            <div className={style.privatPricing}>
                <div className={style.privatPricingCategoryContainer}>
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
                                    style.privatPricingCategoryButton,
                                    state.index === key
                                        ? style.privatPricingCategoryButtonActive
                                        : ""
                                )}
                            >
                                {priceObj["category"]["title"][0]}
                            </button>
                        );
                    })}
                </div>
                <div className={style.privatPricingPrice}>
                    {prices[state.index]["priceDescription"].map(
                        (price, key) => {
                            return <Price key={key} dictionary={price} />;
                        }
                    )}
                </div>

                <div className={style.privatPricingCategory}>
                    <div className={style.groupPricingCategoryInfo}>
                        {dictionary["pricing"]["info"]["span"]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privat;
