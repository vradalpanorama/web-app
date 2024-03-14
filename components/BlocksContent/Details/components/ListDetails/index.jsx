import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ListDetails = ({ className, list }) => {
    return (
        <ul className={cl(className, style.detailList)}>
            {list.map((element, key) => {
                return (
                    <li className={style.detailElement} key={key}>
                        {element}
                    </li>
                );
            })}
        </ul>
    );
};

export default ListDetails;
