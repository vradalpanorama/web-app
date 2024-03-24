"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    CaptionPreview,
    ContainerPreview,
    HeaderPreview,
    ImagePreview,
    LeadPreview,
} from "./components";
import { useGetLang, useLinkGeneration } from "@/hooks";
import Link from "next/link";

const PagePreview = ({
    className,
    pageObj,
    icon,
    lang,
    mainType = false,
    secondaryType = false,
}) => {
    const getLink = useLinkGeneration();
    
    const { _type } = pageObj;

    let pathname, imagePreview, titlePreview, leadPreview;
    switch (_type) {
        case "page":
            pathname = pageObj["settings"]["pathname"]["isSectionPage"]
                ? `${pageObj["settings"]["pathname"]["section"]["slug"]["current"]}/${pageObj["settings"]["pathname"]["slug"]["current"]}`
                : pageObj["settings"]["pathname"]["slug"]["current"];
            imagePreview = pageObj["settings"]["preview"];
            titlePreview = pageObj["settings"]["namePage"][lang];
            leadPreview =
                pageObj["settings"]?.["seoAndSocial"]?.["description"]?.[lang];
            break;
        case "modal":
            pathname = pageObj["settings"]["queryParameter"]["current"];
            imagePreview = icon;
            titlePreview = pageObj["settings"]["nameModal"][lang];
            leadPreview = "";
            break;
        case "externalLink":
            pathname = `/redirect?to=${pageObj["queryParameter"]["current"]}`;
            imagePreview = icon;
            titlePreview = pageObj["linkName"][lang];
            leadPreview = "";
            break;
    }

    const previewType = mainType ? "main" : secondaryType ? "secondary" : null;

    const previewHref = _type === "externalLink" ? pathname : getLink(pathname);

    return (
        <Link href={previewHref}>
            <ContainerPreview previewType={previewType}>
                <ImagePreview
                    previewType={previewType}
                    imagePreview={imagePreview}
                    lang={lang}
                />
                <HeaderPreview
                    typePage={_type}
                    previewType={previewType}
                    title={titlePreview}
                    lang={lang}
                />
                {leadPreview && (
                    <LeadPreview previewType={previewType} lead={leadPreview} />
                )}
                <CaptionPreview
                    lang={lang}
                    previewType={previewType}
                    typePage={_type}
                />
            </ContainerPreview>
        </Link>
    );
};

export default PagePreview;
