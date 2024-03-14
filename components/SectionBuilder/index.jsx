"use client";

import React, { useEffect } from "react";

import { useHeaderState } from "@/helpers/zustandStores/headerState";

import {
    ContainerSection,
    MountainsBottom,
    ContentSection,
} from "./components";

const SectionBuilder = ({ section, lang }) => {
    const [setOnContent, setOnCover] = useHeaderState((state) => [
        state.setOnContent,
        state.setOnCover,
    ]);

    useEffect(() => {
        setOnCover(false);
        setOnContent(false);
    }, [setOnCover, setOnContent]);

    return (
        <ContainerSection>
            <ContentSection section={section} lang={lang} />
            <MountainsBottom />
        </ContainerSection>
    );
};

export default SectionBuilder;
