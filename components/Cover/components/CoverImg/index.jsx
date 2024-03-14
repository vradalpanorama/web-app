"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { Container, Gradients, Img, LoaderScene } from "./components";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const CoverImg = ({ coverImage }) => {
    const [imageCoverLoad] = useCoverState((state) => [state.imageCoverLoad]);
    const { gradientTop, gradientBottom } = coverImage.gradients;
    return (
        <Container gradient={gradientTop}>
            <LoaderScene />
            <div className={style.scene}>
                <Img img={coverImage} />
                {imageCoverLoad && (
                    <Gradients gradients={{ gradientTop, gradientBottom }} />
                )}
            </div>
        </Container>
    );
};

export default CoverImg;
