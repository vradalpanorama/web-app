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

const Webcam = ({ className, children }) => {
    const tabSectionName = "webcam";
    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const serviceTabsSection =
        getCurrentDictionary("widget")["serviceTabsSection"];

    return (
        <Element typeParametrs={"service"} sectionParametrs={"webcam"} row>
            <ElementIcon type={"webcam"} />
            <ElementDescription
                description={serviceTabsSection[tabSectionName]}
            />
            <ElementArrow />
        </Element>
    );
};

export default Webcam;
