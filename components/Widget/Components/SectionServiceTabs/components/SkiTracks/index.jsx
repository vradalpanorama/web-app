import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import {
    Element,
    ElementArrow,
    ElementDescription,
    ElementIcon,
} from "@/components/Widget/Components";

import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const SkiTracks = ({ className, children }) => {
    const tabSectionName = "ski-tracks";
    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const serviceTabsSection =
        getCurrentDictionary("widget")["serviceTabsSection"];
    return (
        <Element typeParametrs={"service"} sectionParametrs={"ski-tracks"} row>
            <ElementIcon type={"ski-tracks"} />
            <ElementDescription
                description={serviceTabsSection[tabSectionName]}
            />
            <ElementArrow />
        </Element>
    );
};

export default SkiTracks;
