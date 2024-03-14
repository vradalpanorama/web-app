import React from "react";
import { Item, List } from "./components";

import cl from "classnames";
import style from "./index.module.scss";

const SubSections = ({ className, listPages }) => {
    return (
        <List className={cl(className)}>
            {listPages.map((page, key) => (
                <Item key={key} page={page} />
            ))}
        </List>
    );
};

export default SubSections;
