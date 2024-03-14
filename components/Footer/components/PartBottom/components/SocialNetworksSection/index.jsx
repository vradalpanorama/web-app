"use client";

import React from "react";
import { Container, Icons, Label, SocialNetwork } from "./components";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const SocialNetworksSection = () => {
    const [statusDictionary, getCurrentDictionary] =
        useInternationalizationState((state) => [
            state.status,
            state.getCurrentDictionary,
        ]);
    const isReadyDictionary = statusDictionary === "ready";

    const footerPart = getCurrentDictionary("footer-part");
    console.log(footerPart);
    const socialNetworksSection = footerPart?.["social-networks-section"];

    const label = isReadyDictionary
        ? socialNetworksSection?.["label"]
        : "Loading...";

    const socialNetworks = socialNetworksSection?.["social-networks"];

    return (
        <Container>
            <Label i18nLabel={label} />
            {isReadyDictionary && socialNetworks && (
                <Icons>
                    {socialNetworks.map(({ type, href }, key) => (
                        <SocialNetwork key={key} type={type} href={href} />
                    ))}
                </Icons>
            )}
        </Container>
    );
};

export default SocialNetworksSection;
