import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ItemSection, LinkSection, NavSection } from "./components";

const Section = ({ className, sectionObj, bottomPosition }) => {
    const { _type } = sectionObj;

    let listPages;
    switch (_type) {
        case "section":
            listPages = sectionObj["pagesSection"];
            break;
        case "page":
            break;
        case "modal":
            break;
    }
    return (
        <ItemSection>
            {listPages && (
                <NavSection
                    sectionObj={sectionObj}
                    className={bottomPosition ? style.bottomPosition : null}
                />
            )}
            {!listPages && (
                <LinkSection
                    sectionObj={sectionObj}
                    className={bottomPosition ? style.bottomPosition : null}
                />
            )}
        </ItemSection>
    );
};

export default Section;
