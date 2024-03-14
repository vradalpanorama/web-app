import React, { Fragment } from "react";

import cl from "classnames";
import style from "./page.module.scss";
import { Widget } from "@/components";

export default async function ActivitiesPage() {
    return (
        <Fragment>
            <div className={style.div}>Activities Page</div>
            <Widget />
        </Fragment>
    );
}
