import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    ContainerDetails,
    HeaderDetails,
    LeadDetails,
    ListDetails,
} from "./components";
import { ContainerBlock } from "../components";

const BlockDetails = ({ props, desktopWidth, desktopAlign, mobileOrder }) => {
    const { header, lead, list } = props;
    return (
        <ContainerBlock
            className={style.containerDetails}
            desktopWidth={desktopWidth}
            desktopAlign={desktopAlign}
            mobileOrder={mobileOrder}
        >
            {header && <HeaderDetails header={header} />}
            {lead && <LeadDetails lead={lead} />}
            {list && <ListDetails list={list} />}
        </ContainerBlock>
    );
};

export default BlockDetails;
