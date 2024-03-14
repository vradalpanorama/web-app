import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Container, Close, ExternalLink, InternalLink } from "./components";

const ActionType = ({ type, pathname, text }) => {
    switch (type) {
        case "internal-link":
            return <InternalLink pathname={pathname} text={text} />;
        case "external-link":
            return <ExternalLink pathname={pathname} text={text} />;
        default:
            return <Close />;
    }
};

const Action = ({ className, action }) => {
    
    const { type, pathname, text } = action;

    return (
        <Container>
            <ActionType type={type} pathname={pathname} text={text} />
        </Container>
    );
};

export default Action;
