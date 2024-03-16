"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import pic from "@/public/images/cta-ski-rental.jpg";
import { SectionContent } from "@/components";

import { Container, Content, ImageArea, TextArea } from "./components";
import { useMatchMedia } from "@/hooks";

const Banner = ({ className, bannerData }) => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const [heightBanner, setHeightBanner] = useState(null);
    // const { bannerImg, bannerContent, action } = bannerData;
    const { content, image } = bannerData;

    useEffect(() => {
        if (isDesktop) setHeightBanner("40rem");
        if (isTablet) setHeightBanner("30rem");
        if (isMobile) setHeightBanner("auto");
    }, [isMobile, isTablet, isDesktop]);

    return (
        <SectionContent className={cl(className)}>
            {heightBanner && (
                <Container>
                    <Content height={heightBanner}>
                        <ImageArea image={image} />
                        <TextArea bannerContent={content} />
                    </Content>
                </Container>
            )}
        </SectionContent>
    );
};

export default Banner;
