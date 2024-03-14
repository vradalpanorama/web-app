"use client";

import React, { useEffect } from "react";

import { Container, Content, CoverImg } from "./components";
// import { useCoverState } from "@/helpers/zustandStores/coverState";

const Cover = ({ cover, lang }) => {
    const { content, image } = cover;
    // const [imageCoverLoad, setImageCoverLoad] = useCoverState((state) => [
    //     state.imageCoverLoad,
    //     state.setImageCoverLoad,
    // ]);
    // useEffect(() => {
    //     setImageCoverLoad(false);
    // }, []);

    return (
        <Container>
            <Content content={content} lang={lang} />
            <CoverImg coverImage={image} />
        </Container>
    );
};

export default Cover;
