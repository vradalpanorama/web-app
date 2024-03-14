import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function FoodAndBeveragePage() {
    return (
        <Fragment>
            <div className={style.div}>Food And Beverage Page</div>
            <Widget />
        </Fragment>
    );
}
