import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Section, SectionCol, SectionColContent, SectionContent } from "@/components/_componentsSections";
import { Button, Img, Lead, Title } from "@/components";


import sectionIMG from "@/public/images/ski-rental/sectionOne.png"

const SectionA = ({dictionary}) => {
    return (
        <Section className={style.section}>
            <SectionContent isColsType={true}>
                <SectionCol isLeftPart={true}>
                    <SectionColContent>
                        <Title className={style.title}>{dictionary['title']}</Title>
                        <Lead>{dictionary['lead']}</Lead>
                        <Button className={style.button}>booking </Button>
                    </SectionColContent>
                </SectionCol>
                <SectionCol >
                    <Img img={sectionIMG} alt={""} className={style.img}/>
                </SectionCol>
            </SectionContent>
        </Section>
    );
};

export default SectionA;
