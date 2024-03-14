"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    Container,
    Content,
    Logotype,
    MenuDesktop,
    MenuSideBar,
    SpaceCover,
} from "./components";
import { useMatchMedia } from "@/hooks";
import { useMenuSettings } from "@/helpers/zustandStores/headerState";

const Header = ({ menuSettings }) => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const [isClient, setIsClient] = useState(false);
    const mobileMenu = isMobile || isTablet;

    const [statusMenuSettings, setMenuSettings] = useMenuSettings((state) => [
        state.status,
        state.setMenuSettings,
    ]);

    useEffect(() => {
        setIsClient(true);
        if (statusMenuSettings === "default") {
            setMenuSettings(menuSettings);
        }
    }, [statusMenuSettings, setMenuSettings, menuSettings]);

    return (
        <Container>
            <Content>
                <Logotype />
                {isClient && isDesktop && <MenuDesktop />}
                {isClient && mobileMenu && <MenuSideBar />}
            </Content>
            {isClient && mobileMenu && <SpaceCover />}
        </Container>
    );
};

export default Header;
