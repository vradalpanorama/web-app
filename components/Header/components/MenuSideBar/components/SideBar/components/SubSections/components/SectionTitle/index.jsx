import React from "react";
import { Container, Title } from "./components";
import { Icon } from "@/components";

import cl from "classnames";
import style from "./index.module.scss";

const SectionTitle = ({ sectionName }) => {
    return (
        <Container className={style.button} >
            <Icon type={"arrow"} className={style.arrow} />
            <Title>{sectionName}</Title>
        </Container>
    );
};

export default SectionTitle;
