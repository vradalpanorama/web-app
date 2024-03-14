import {
    Section,
    SectionCol,
    SectionColContent,
    SectionContent,
} from "@/components/_componentsSections";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Img, Lead, Title } from "@/components";

import descriptionIMG from "@/public/images/cover-girl.jpg";
import Button from "@/components/Button";

const SectionDescription = ({ dictionary }) => {
    return (
        <Section>
            <SectionContent className={style.sectionContent}>
                <Title type={"section"} className={style.sectionContentTitle} >{dictionary['title']}</Title>
                <Lead className={style.sectionContentLead}>{dictionary['lead']}</Lead>
            </SectionContent>
            <SectionContent isColsType={true}>
                <SectionCol isLeftPart={true} className={style.sectionColLeft}>
                    <Img
                        img={descriptionIMG}
                        alt={""}
                        className={style.sectionColIMG}
                    />
                </SectionCol>
                <SectionCol className={style.sectionColRight}>
                    <SectionColContent className={style.sectionColContent}>
                        <Lead>{dictionary["paragraph"]}</Lead>
                        <Button className={style.button}> Note </Button>
                    </SectionColContent>
                </SectionCol>
            </SectionContent>
        </Section>
    );
};

export default SectionDescription;
