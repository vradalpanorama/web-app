import { Appearance } from "@/components";
import React from "react";

import cl from 'classnames';
import style from './index.module.scss';

import {
    ContentSpace,
    SectionPromption,
    SectionService,
    SectionServiceTabs,
} from "..";

const LargeWidget = () => {
    return (
        <Appearance className={style.pod} widget>
            <ContentSpace leftPart>
                <SectionService />
                {/* <SectionServiceTabs /> */}
            </ContentSpace>
            <ContentSpace rightPart>
                <SectionPromption />
            </ContentSpace>
        </Appearance>
    );
};

export default LargeWidget;
