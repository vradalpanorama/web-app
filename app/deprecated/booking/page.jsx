import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function BookingPage() {
    return (
        <Fragment>
            <div className={style.div}>Booking Page</div>
            <Widget />
        </Fragment>
    );
}
