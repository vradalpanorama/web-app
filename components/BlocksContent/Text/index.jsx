import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { HeaderText, LeadText, ListText } from "./components";
import { ContainerBlock } from "../components";

const BlockDetails = ({ props, desktopWidth, desktopAlign, mobileOrder }) => {
    const { header, lead, list } = props;
    return (
        <ContainerBlock
            className={style.containerText}
            desktopWidth={desktopWidth}
            desktopAlign={desktopAlign}
            mobileOrder={mobileOrder}
        >
            {header && <HeaderText header={header} />}
            {lead && <LeadText lead={lead} />}
            {list && <ListText list={list} />}
        </ContainerBlock>
    );
};

export default BlockDetails;
