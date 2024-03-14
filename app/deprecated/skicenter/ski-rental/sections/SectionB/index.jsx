import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import {
    Section,
    SectionCol,
    SectionColContent,
    SectionContent,
} from "@/components/_componentsSections";
import { Img, Lead, Title } from "@/components";

import sectionIMG from "@/public/images/ski-rental/sectionTwo.png"

const SectionTwo = ({dictionary}) => {
    return (
        <Section>
            <SectionContent isColsType={true}>
                <SectionCol isLeftPart={true}>
                    <Img img={sectionIMG} alt={''} className={style.img}/>
                </SectionCol>
                <SectionCol>
                    <SectionColContent>
                        <Title className={style.title}>{dictionary['title']}</Title>
                        <Lead>{dictionary['lead']}</Lead>
                        <Lead>{dictionary['paragraph']}</Lead>
                    </SectionColContent>
                </SectionCol>
            </SectionContent>
        </Section>
    );
};

export default SectionTwo;
