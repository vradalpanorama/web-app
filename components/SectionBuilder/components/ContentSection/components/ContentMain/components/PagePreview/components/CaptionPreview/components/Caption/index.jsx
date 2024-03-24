import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const no = {
    page: "Åpne siden",
    modal: "Åpne modalt vindu",
    externalLink: "Åpne link",
};
const en = {
    page: "Open page",
    modal: "Open modal window",
    externalLink: "Open link",
};

const Caption = ({ className, type, lang }) => {
    return (
        <div className={cl(className, style.caption)}>
            {lang === "en" && en[type]}
            {lang === "no" && no[type]}
        </div>
    );
};

export default Caption;
