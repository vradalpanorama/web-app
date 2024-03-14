import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Loading = () => {
    return [1, 2, 3, 4].map((item, key) => (
        <div key={key} className={style.featurePlaceholder}>
            <div className={style.featureIconPlaceholder}></div>
            <div className={style.featureText}>
                <div className={style.featureTextTitle}></div>
                <div className={style.featureTextLead}></div>
            </div>
        </div>
    ));
};

export default Loading;
