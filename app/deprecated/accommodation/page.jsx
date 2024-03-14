import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function AccommodationPage() {
    return (
        <Fragment>
            <div className={style.div}>Accommodation Page</div>
            <Widget />
        </Fragment>
    );
}
