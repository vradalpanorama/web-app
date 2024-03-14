import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ContainerElements } from "..";
import {
    Elevators,
    SkiTrack,
    Slopes,
    WeatherBottom,
    WeatherSnowDepth,
    WeatherTop,
    Webcam,
} from "./components";
import { useWidgetServiceSectionDataState } from "@/helpers/zustandStores/widgetState";

const SectionService = () => {
    return (
        <ContainerElements row>
            <WeatherTop />
            <WeatherBottom />
            <WeatherSnowDepth />
            {/* <Webcam /> */}
            <Elevators />
            <Slopes />

            {/* <SkiTrack skiTrackNumber={1} /> */}

            {/* <SkiTrack skiTrackNumber={2} /> */}

            {/* <SkiTrack skiTrackNumber={3} /> */}

            {/* <SkiTrack skiTrackNumber={4} /> */}
        </ContainerElements>
    );
};

export default SectionService;
