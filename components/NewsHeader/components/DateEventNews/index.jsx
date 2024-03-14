import React from "react";
import { format, formatRelative } from "date-fns";
import { nb, enGB } from "date-fns/locale";

import cl from "classnames";
import style from "./index.module.scss";

const DateEventNews = ({ className, datePub, lang }) => {
    const datePubObj = new Date(Date.parse(datePub));

    const dateEventPreview = formatRelative(datePubObj, new Date(), {
        locale: lang === "en" ? enGB : nb,
    });
    return (
        <div className={cl(className, style.dateEventNews)}>
            {dateEventPreview}
        </div>
    );
};

export default DateEventNews;
