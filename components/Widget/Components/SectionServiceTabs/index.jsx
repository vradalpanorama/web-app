import React from "react";
import { ContainerElements } from "..";
import { SkiTracks, Webcam } from "./components";

const SectionServiceTabs = () => {
    return (

        <ContainerElements column>
            <Webcam />
            <SkiTracks />
        </ContainerElements>
    );
};

export default SectionServiceTabs;
