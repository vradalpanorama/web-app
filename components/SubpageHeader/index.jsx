"use client";
import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { SectionContent } from "@/components";

import {
    ContentSubpageHeader,
    ImgCoverSubpageHeader,
    InfoSubpageHeader,
    LeadSubpageHeader,
    TitleSubpageHeader,
} from "./components";
import { useHeaderState } from "@/helpers/zustandStores/headerState";

const SubpageHeader = ({ subpageHeader, lang }) => {
    const { image, content } = subpageHeader;
    const { title, lead, thirdField } = content;

    const [setOnContent, setOnCover] = useHeaderState((state) => [
        state.setOnContent,
        state.setOnCover,
    ]);

    useEffect(() => {
        setOnCover(false);
        setOnContent(false);
    }, [setOnCover, setOnContent]);

    return (
        <SectionContent className={style.sectionContent}>
            <ContentSubpageHeader>
                <TitleSubpageHeader title={title[lang]} />
                <LeadSubpageHeader lead={lead[lang]} />
                <InfoSubpageHeader info={thirdField} lang={lang} />
            </ContentSubpageHeader>
            <ImgCoverSubpageHeader img={image} lang={lang} />
        </SectionContent>
    );
};

export default SubpageHeader;
