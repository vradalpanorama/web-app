import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Container, Subtitle, Title } from "./components";

const Description = ({ className, description }) => {
    const [title, subtitle] = description;

    return (
        <Container>
            <Title titleText={title} />
            {subtitle && <Subtitle subtitleText={subtitle} />}
        </Container>
    );
};

export default Description;
