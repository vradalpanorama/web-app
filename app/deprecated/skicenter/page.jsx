import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function SkicenterPage() {
    return (
        <Fragment>
            <div className={style.div}>Skicenter Page</div>
            <Widget />
        </Fragment>
    );
}
