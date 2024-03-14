"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { Action, Container, Title } from "./components";

const Content = ({content, lang}) => {
    const {title, lead, action} = content;
    console.log(title, lead, action);

    return (
        <Container action={action}>
            <Title title={title[lang]} />
            <Action lead={lead[lang]} action={action} />
        </Container>
    );
};

export default Content;
