import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ListText = ({ className, list }) => {
    return (
        <ul className={cl(className, style.textList)}>
            {list.map((element, key) => {
                return (
                    <li className={style.textElement} key={key}>
                        {element}
                    </li>
                );
            })}
        </ul>
    );
};

export default ListText;
