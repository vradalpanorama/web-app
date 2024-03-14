import React, { Fragment } from "react";
import {
    Element,
    ElementBottomPart,
    ElementDescription,
    ElementIcon,
    ElementTopPart,
} from "@/components/Widget/Components";

import cl from "classnames";
import style from "./index.module.scss";


const PromotionElement = ({ key, element }) => {
    return (
        <Fragment key={key}>
            <Element
                className={style.promotionElement}
                typeParametrs={"promo"}
                sectionParametrs={element.title}
                column
            >
                <ElementTopPart>
                    <ElementIcon type={element.title} />
                </ElementTopPart>
                <ElementBottomPart>
                    <ElementDescription
                        description={element.description}
                        split
                        arrow
                    />
                </ElementBottomPart>
            </Element>
        </Fragment>
    );
};

export default PromotionElement;
