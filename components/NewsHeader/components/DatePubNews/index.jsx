import React from "react";
import { format, formatRelative } from "date-fns";
import { nb, enGB } from "date-fns/locale";

import cl from "classnames";
import style from "./index.module.scss";

const DatePubNews = ({ className, datePub, lang }) => {
    const datePubObj = new Date(Date.parse(datePub));

    const datePubPreview = format(datePubObj, "d MMMM, yyyy", {
        locale: lang === "en" ? enGB : nb,
    });
    return (
        <div className={cl(className, style.datePubNews)}>{datePubPreview}</div>
    );
};

export default DatePubNews;
