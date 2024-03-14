"use client";

import React from "react";
import { Container, Form, Title } from "./components";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const EmailSubscription = () => {
    const [status, getCurrentDictionary] = useInternationalizationState(
        (state) => [state.status, state.getCurrentDictionary]
    );
    const isReadyDictionary = status === "ready";
    const footerPart = isReadyDictionary
        ? getCurrentDictionary("footer-part")
        : null;

    return (
        <Container>
            <Title
                title={footerPart?.["email-subscription-section"]?.["title"]}
            />
            <Form
                placeholder={
                    footerPart?.["email-subscription-section"]?.["placeholder"]
                }
            />
        </Container>
    );
};

export default EmailSubscription;
