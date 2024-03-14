import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function CabinAndPlotsPage() {
    return (
        <Fragment>
            <div className={style.div}>Cabin And Plots Page</div>
            <Widget />
        </Fragment>
    );
}
