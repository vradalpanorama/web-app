"use client";
import React, { Fragment, useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { Container, Section, ContainerSections } from "./components";
import { useMatchMedia } from "@/hooks";

const NavigationSection = ({ navigation }) => {
    const { isMobile } = useMatchMedia();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const ContainerForSections = !isMobile ? ContainerSections : Fragment;
    return (
        <Container>
            {isClient &&
                navigation.map((navSection, key) =>
                    navSection["rows"].length > 1 ? (
                        <ContainerForSections key={key}>
                            {navSection["rows"].map((nav, key) => (
                                <Section key={key} sectionObj={nav} />
                            ))}
                        </ContainerForSections>
                    ) : (
                        <Section key={key} sectionObj={navSection["rows"][0]} />
                    )
                )}
        </Container>
    );
};

export default NavigationSection;
