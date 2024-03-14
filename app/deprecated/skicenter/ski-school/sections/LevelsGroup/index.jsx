import {
    Lead,
    MountainsGapWhiteColor,
    MountainsWithBlueColor,
    Title,
} from "@/components";
import { Section } from "@/components/_componentsSections";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const LevelCard = ({ dictionary }) => {
    const cardType = dictionary["type"];
    const cardTypeClassList =
        cardType === "blue"
            ? [style.levelCardTypeBlue, style.levelCardIconBlue]
            : cardType === "green"
            ? [style.levelCardTypeGreen, style.levelCardIconGreen]
            : cardType === "red"
            ? [style.levelCardTypeRed, style.levelCardIconRed]
            : cardType === "black"
            ? [style.levelCardTypeBlack, style.levelCardIconBlack]
            : "";
    return (
        <div className={cl(style.levelCard, cardTypeClassList[0])}>
            <div
                className={cl(style.levelCardIcon, cardTypeClassList[1])}
            ></div>
            <div className={style.levelCardText}>
                <div className={style.levelCardTextHeader}>
                    <Title>{dictionary["title"]}</Title>
                </div>
                <div className={style.levelCardTextLead}>
                    <Lead>{dictionary["lead"]}</Lead>
                </div>
            </div>
        </div>
    );
};

const LevelsGroup = ({ dictionary }) => {
    return (
        <>
            <MountainsWithBlueColor className={style.mountainsTop} />
            <Section className={style.levelsGroup}>
                <div className={style.container}>
                    <div className={style.header}>
                        <div className={style.headerContainer}>
                            <Title
                                type={"Section"}
                                className={style.headerTitle}
                            >
                                {dictionary["title"]}
                            </Title>
                        </div>
                        <p className={style.headerLead}>{dictionary["lead"]}</p>
                    </div>
                    <div className={style.cardContainer}>
                        <LevelCard dictionary={dictionary["levels"]["blue"]} />
                        <LevelCard dictionary={dictionary["levels"]["green"]} />
                    </div>
                    <div className={style.cardContainer}>
                        <LevelCard dictionary={dictionary["levels"]["red"]} />
                        <LevelCard dictionary={dictionary["levels"]["black"]} />
                    </div>
                </div>
                <MountainsGapWhiteColor className={style.mountainsBottom} />
            </Section>
        </>
    );
};

export default LevelsGroup;
