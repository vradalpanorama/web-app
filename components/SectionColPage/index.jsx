// refactoring - corners

"use client";

import React, { useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Img, ReadMore, Title } from "..";
import {
    SectionCol,
    SectionColContent,
    SectionContent,
} from "../_componentsSections";
import { useParams } from "next/navigation";

const SectionColPage = ({
    children,
    className,
    dictionarySection,
    imgSection,
    isLeftSideIMG = false,
    isRightSideIMG = false,
}) => {
    const params = useParams();

    const [isOnContainer, setOnContainer] = useState(false);

    const linkToSectionSlug = `/${params.lang}/${dictionarySection["slug"]}`;
    const sectionSpan = dictionarySection["sectionSpan"];
    const sectionTitle = dictionarySection["title"];
    const sectionLead = dictionarySection["lead"];

    return (
        <div
            onMouseEnter={() => {
                setOnContainer(true);
            }}
            onMouseLeave={() => {
                setOnContainer(false);
            }}
        >
            <SectionContent isColsType={true} link={linkToSectionSlug}>
                {isLeftSideIMG && (
                    <>
                        <SectionCol
                            isLeftPart={true}
                            className={cl(
                                style.container,
                                isOnContainer ? style.containerActive : ""
                            )}
                        >
                            {/* alt need to change */}
                            <Img
                                img={imgSection}
                                alt={"section"}
                                className={cl(
                                    style.containerIMG,
                                    isOnContainer
                                        ? style.containerIMGActive
                                        : ""
                                )}
                            />
                        </SectionCol>
                        <SectionCol>
                            <SectionColContent>
                                <Title type={"SectionSpan"}>
                                    {sectionSpan}
                                </Title>
                                <Title>{sectionTitle}</Title>
                                <p>{sectionLead}</p>
                                <ReadMore isActive={isOnContainer} />
                            </SectionColContent>
                        </SectionCol>
                    </>
                )}
                {isRightSideIMG && (
                    <>
                        <SectionCol isLeftPart={true}>
                            <SectionColContent>
                                <Title type={"SectionSpan"}>
                                    {sectionSpan}
                                </Title>
                                <Title>{sectionTitle}</Title>
                                <p>{sectionLead}</p>
                                <ReadMore isActive={isOnContainer} />
                            </SectionColContent>
                        </SectionCol>
                        <SectionCol
                            className={cl(
                                style.container,
                                isOnContainer ? style.containerActive : ""
                            )}
                        >
                            <Img
                                img={imgSection}
                                alt={"section"}
                                className={cl(
                                    style.containerIMG,
                                    isOnContainer
                                        ? style.containerIMGActive
                                        : ""
                                )}
                            />
                        </SectionCol>
                    </>
                )}
            </SectionContent>
        </div>
    );
};

export default SectionColPage;
