"use client";
import React from "react";
import { Container, SectionTitle, SubSectionsList } from "./components";
import { useNavigationSidebar } from "@/helpers/zustandStores/headerState";
import { Appearance } from "@/components";

import cl from 'classnames';
import style from './index.module.scss';
import { useGetLang } from "@/hooks";

const SubSections = () => {
    const [activeSectionParams] = useNavigationSidebar((state) => [
        state.activeSectionParams,
    ]);
    // const { sectionName, pathname, listPages } = activeSectionParams;
    const lang = useGetLang();
    const sectionName = activeSectionParams['title'][lang];
    return (
        <Appearance menuSideBar animationDuration=".3s">
            <Container>
                <SectionTitle sectionName={sectionName} />
                <SubSectionsList activeSectionParams={activeSectionParams} />
            </Container>
        </Appearance>
    );
};

export default SubSections;
