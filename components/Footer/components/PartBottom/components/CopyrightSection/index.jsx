import React from "react";
import cl from "classnames";

import style from "./index.module.scss";
import { Icon } from "@/components";
import { Container, Statement } from "./components";

const CopyrightSection = ({ className }) => {
    return (
        <Container>
            <Icon type={"copyright"} className={style.iconCopyright} />
            <Statement author={"VRÅDAL PANORAMA AS"} />
        </Container>
    );
};

export default CopyrightSection;
