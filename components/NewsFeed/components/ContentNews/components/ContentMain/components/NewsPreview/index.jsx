"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    ContainerPreview,
    HeaderPreview,
    ImagePreview,
    LeadPreview,
    ReadMorePreview,
} from "./components";
import { useGetLang, useLinkGeneration } from "@/hooks";
import Link from "next/link";

const NewsPreview = ({
    className,
    newsObj,
    mainType = false,
    secondaryType = false,
}) => {
    const lang = useGetLang();
    const getLink = useLinkGeneration();

    // const { typePub, datePub, slug, newsCover, newsContent } = newsObj;
    const { settings, header } = newsObj;
    const newsType = mainType ? "main" : secondaryType ? "secondary" : null;
    const today = new Date();
    const datePubFormat = new Date(settings.datePub);
    const imgBadgeUpcoming = lang === "en" ? "upcoming" : "kommende";
    const imgBadgePast = lang === "en" ? "past" : "tidligere";
    const imgBadge =
        settings.typeNews === "news"
            ? null
            : datePubFormat >= today
            ? imgBadgeUpcoming
            : imgBadgePast;

    const newsHref = getLink(settings.slug.current);

    return (
        <Link href={newsHref}>
            <ContainerPreview newsType={newsType}>
                <ImagePreview
                    newsType={newsType}
                    newsCover={header.image}
                    imgBadge={imgBadge}
                />
                <HeaderPreview
                    typePub={settings.typeNews}
                    newsType={newsType}
                    lang={lang}
                    datePub={settings.datePub}
                    title={header.content.title[lang]}
                />
                <LeadPreview
                    newsType={newsType}
                    lead={header.content.lead[lang]}
                />
                <ReadMorePreview lang={lang} newsType={newsType} />
            </ContainerPreview>
        </Link>
    );
};

export default NewsPreview;
