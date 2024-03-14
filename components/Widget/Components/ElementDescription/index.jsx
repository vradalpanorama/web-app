// косяк со стрелкой

import React, { Fragment } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ElementArrow } from "..";

const ElementDescription = ({ description, split, arrow }) => {
    const descriptionParts = split ? description.split(" ") : [description];
    return (
        <Fragment>
            {descriptionParts.map((part, key) => (
                <span
                    key={key}
                    className={cl(
                        style.description,
                        arrow ? style.descriptionWithArrow : null
                    )}
                >
                    {part}{" "} {arrow && key === 1 && <ElementArrow />}
                </span>
            ))}
        </Fragment>
    );
};

export default ElementDescription;
