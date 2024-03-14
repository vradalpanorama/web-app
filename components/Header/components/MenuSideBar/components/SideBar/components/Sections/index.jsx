import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Container, List, Section } from "./components";
import { Appearance } from "@/components";
import { useMenuSettings } from "@/helpers/zustandStores/headerState";

const Sections = () => {
    const [statusMenuSettings, menuSettings] = useMenuSettings((state) => [
        state.status,
        state.menuSettings,
    ]);

    return (
        <Appearance
            className={style.appearance}
            menuSideBar
            animationDuration=".3s"
        >
            <Container>
                <List>
                    {menuSettings["mainNavigation"].map((sectionObj, key) => (
                        <Section key={key} sectionObj={sectionObj} />
                    ))}
                </List>
                <List>
                    <Section
                        sectionObj={menuSettings["secondNavigation"]}
                        bottomPosition
                    />
                </List>
            </Container>
        </Appearance>
    );
};

export default Sections;
