"use client";
import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { SectionContent } from "@/components";

import {
    ContentNewsHeader,
    DateEventNews,
    DatePubNews,
    ImgCoverNews,
    LeadNews,
    TitleNews,
    TypeNews,
} from "./components";
import { useGetLang } from "@/hooks";
import { useHeaderState } from "@/helpers/zustandStores/headerState";

const NewsHeader = ({ newsObj }) => {
    const lang = useGetLang();
    const setOnContent = useHeaderState((state) => state.setOnContent);
    useEffect(() => {
        setOnContent(false);
    }, [setOnContent]);


    const { settings, header } = newsObj;

    const {content, image} = header;

    const typePub = settings['typeNews'];
    const datePub = settings['datePub'];

    return (
        <SectionContent className={style.sectionContent}>
            <ContentNewsHeader>
                <TypeNews type={typePub} />
                {typePub === "event" && (
                    <DateEventNews datePub={datePub} lang={lang} />
                )}
                <TitleNews title={content['title'][lang]} />
                <LeadNews lead={content['lead'][lang]} />
                {typePub === "news" && (
                    <DatePubNews datePub={datePub} lang={lang} />
                )}
            </ContentNewsHeader>
            <ImgCoverNews img={image} />
        </SectionContent>
    );
};

export default NewsHeader;
