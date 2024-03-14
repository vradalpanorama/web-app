import { Section } from "@/components/_componentsSections";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ContentContainer } from "@/components";
import { Group, Private } from "./components";


const GroupAndPrivatLessons = ({ dictionary }) => {
    return (
        <Section className={style.section}>
            <ContentContainer className={style.contentContainer}>
                <Group dictionary={dictionary["group"]} />
                <Private dictionary={dictionary["privat"]} />
            </ContentContainer>
        </Section>
    );
};

export default GroupAndPrivatLessons;
