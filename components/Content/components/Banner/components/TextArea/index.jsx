import React from "react";
import { Action, Container, Lead, TextContent, Title } from "./components";

import cl from "classnames";
import style from "./index.module.scss";

const TextArea = ({ bannerContent }) => {
    const { title, lead, button } = bannerContent;
    return (
        <Container>
            <TextContent>
                <Title title={title} />
                <Lead lead={lead} />
            </TextContent>
            <Action action={button} />
        </Container>
    );
};

export default TextArea;
