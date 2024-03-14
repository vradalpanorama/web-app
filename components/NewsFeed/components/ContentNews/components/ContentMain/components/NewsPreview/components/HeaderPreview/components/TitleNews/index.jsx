import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const TitleNews = ({ className, newsType, title }) => {
    return (
        <span
            className={cl(
                className,
                style.titleNews,
                newsType === "main" ? style.titleNewsMain : null,
                newsType === "secondary" ? style.titleNewsSecondary : null
            )}
        >
            {title}
        </span>
    );
};

export default TitleNews;
