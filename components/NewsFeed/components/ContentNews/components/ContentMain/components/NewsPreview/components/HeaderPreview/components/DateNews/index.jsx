import React from "react";
import { format, formatRelative } from "date-fns";
import { nb, enGB } from "date-fns/locale";
import cl from "classnames";
import style from "./index.module.scss";

const DateNews = ({ className, datePub, typePub, lang }) => {
    const datePubObj = new Date(Date.parse(datePub));

    switch (typePub) {
        case "news":
            const datePubPreview = format(datePubObj, "d MMMM, yyyy", {
                locale: lang === "en" ? enGB : nb,
            });
            return (
                <span className={cl(className, style.dateNews)}>
                    {datePubPreview}
                </span>
            );

        case "event":
            const dateEventPreview = formatRelative(datePubObj, new Date(), {
                locale: lang === "en" ? enGB : nb,
            });
            return (
                <span className={cl(className, style.dateNews)}>
                    {dateEventPreview}
                </span>
            );
    }

    // return <p className={cl(className, style.dateNews)}>{datePubPreview}</p>;
};

export default DateNews;
