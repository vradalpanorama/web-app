"use client";
import React from "react";
import { Container, Content, List, Section } from "./components";
import { useMenuSettings } from "@/helpers/zustandStores/headerState";

const MenuDesktop = () => {
    const [statusMenuSettings, menuSettings] = useMenuSettings((state) => [
        state.status,
        state.menuSettings,
    ]);

    const localSwitcherObj = {
        _type: "locale-switcher",
    };

    return (
        <Container>
            <Content>
                {statusMenuSettings === "ready" && (
                    <React.Fragment>
                        <List mainPart>
                            {menuSettings["mainNavigation"].map(
                                (sectionObj, key) => (
                                    <Section
                                        key={key}
                                        sectionObj={sectionObj}
                                        position={"center"}
                                    />
                                )
                            )}
                        </List>
                        <List sidePart>
                            <Section sectionObj={localSwitcherObj} />
                            <Section
                                sectionObj={menuSettings["secondNavigation"]}
                                position={"right"}
                            />
                        </List>
                    </React.Fragment>
                )}
            </Content>
        </Container>
    );
};

export default MenuDesktop;
