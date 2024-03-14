"use client";
import React from "react";
import { Container, SubSections, TitleSection } from "./components";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";

const Section = ({ sectionObj }) => {
    // const { sectionName, type, listPages } = sectionObj;
    const { pagesSection, title } = sectionObj;

    const lang = useGetLang();

    return (
        <Container>
            <TitleSection title={title[lang]} />
            <SubSections listPages={pagesSection} />
        </Container>
    );
};

export default Section;
