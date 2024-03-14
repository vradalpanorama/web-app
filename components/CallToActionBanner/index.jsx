"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "../_componentsSections";
import { ContentContainer, Lead, Title } from "@/components";

import cl from "classnames";
import style from "./index.module.scss";

const CallToActionBanner = ({ className, img, dictionary }) => {
    const [isOnContainer, setOnContainer] = useState(false);
    const { title, lead, button, linkToBook } = dictionary;

    return (
        <Section>
            <ContentContainer>
                <div //modal window
                    className={cl(className, style.banner)}
                    onMouseEnter={() => {
                        setOnContainer(true);
                    }}
                    onMouseLeave={() => {
                        setOnContainer(false);
                    }}
                >
                    <div className={cl(style.contentText)}>
                        <ContentText
                            title={title}
                            lead={lead}
                            button={button}
                        />
                    </div>
                    <div className={cl(style.contentImage)}>
                        <ContentImage img={img} isOnContainer={isOnContainer} />
                    </div>
                </div>
            </ContentContainer>
        </Section>
    );
};

const ContentText = ({ title, lead, button }) => {
    return (
        <>
            <div className={style.contentTextContainer}>
                <div className={style.contentTextContainerDesc}>
                    <Title
                        type={"CallToAction"}
                        className={style.contentTextContainerDescTitle}
                    >
                        {title}
                    </Title>
                    <Lead
                        className={style.contentTextContainerDescLead}
                        color={"#fff"}
                    >
                        {lead}
                    </Lead>
                </div>
                <div className={style.contentTextContainerButton}>{button}</div>
            </div>
            <div className={cl(style.contentTextSlashContainer)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="809"
                    viewBox="0 0 80 809"
                    fill="currentColor"
                    className={cl(style.contentTextSlash)}
                >
                    <path d="M0 0.681641H80L0 808.182V0.681641Z" />
                </svg>
            </div>
        </>
    );
};

const ContentImage = ({ img, isOnContainer }) => {
    return (
        <Image
            src={img}
            width={img.width}
            height={img.height}
            alt={"img"}
            className={cl(
                style.contentImageIMG,
                isOnContainer ? style.contentImageIMGActive : ""
            )}
        />
    );
};

export default CallToActionBanner;
