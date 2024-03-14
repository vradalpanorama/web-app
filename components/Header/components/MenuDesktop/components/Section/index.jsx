"use client";

import React from "react";
import { Container, SectionTitleLink, SubSections } from "./components";
import { useNavigationDesktop } from "@/helpers/zustandStores/headerState";

const Section = ({ sectionObj, position }) => {
    // const {
    //     name,
    //     params: { listPages, position, pathname },
    // } = sectionObj;
    const { _type } = sectionObj;

    let name, listPages;
    switch (_type) {
        case "section":
            name = sectionObj["title"]["en"];
            listPages = sectionObj["pagesSection"];
            break;
        case "page":
            name = sectionObj["settings"]["namePage"]["en"];
            break;
        case "modal":
            name = sectionObj["settings"]["nameModal"]["en"];
            break;
        case "externalLink":
            name = sectionObj["linkName"]["en"];
            break;
        case "locale-switcher":
            name = "locale-switcher";
            break;
    }

    const [activeSection] = useNavigationDesktop((state) => [
        state.activeSection,
    ]);
    const isActiveSection = activeSection === name;

    return (
        <Container>
            <SectionTitleLink sectionObj={sectionObj} />
            {isActiveSection && listPages && (
                <SubSections listPages={listPages} position={position} />
            )}
        </Container>
    );
};

export default Section;
