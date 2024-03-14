import React from "react";
import { Action, Container, Lead, TextContent, Title } from "./components";

import cl from "classnames";
import style from "./index.module.scss";

const TextArea = ({ textObj }) => {
    const { title, lead, action } = textObj;
    return (
        <Container>
            <TextContent>
                <Title title={title} />
                <Lead lead={lead} />
            </TextContent>
            <Action action={action} />
        </Container>
    );
};

export default TextArea;
