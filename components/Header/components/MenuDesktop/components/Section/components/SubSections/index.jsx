import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Container, Item, List } from "./components";
import { Appearance } from "@/components";

const SubSections = ({ className, listPages, position }) => {
    const leftPosition = position === "left";
    const rightPosition = position === "right";
    const centerPosition = position === "center";

    return (
        <Appearance menuDesktop animationDuration=".4s">
            <Container
                leftPosition={leftPosition}
                rightPosition={rightPosition}
                centerPosition={centerPosition}
            >
                <List>
                    {listPages.map((itemPage, key) => (
                        <Item
                            key={key}
                            page={itemPage}
                        />
                    ))}
                </List>
            </Container>
        </Appearance>
    );
};

export default SubSections;
