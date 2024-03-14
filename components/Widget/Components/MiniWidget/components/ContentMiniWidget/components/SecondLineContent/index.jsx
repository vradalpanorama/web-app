import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";
import { useWidgetServiceSectionDataState } from "@/helpers/zustandStores/widgetState";

const SecondLineContent = ({ className }) => {
    const lang = useGetLang();
    const [status, serviceData] = useWidgetServiceSectionDataState((state) => [
        state.status,
        state.widgetServiceSectionData,
    ]);

    const topValue = serviceData?.["weather-top"]["value"];
    const bottomValue = serviceData?.["weather-bottom"]["value"];
    const snowValue = serviceData?.["weather-snow-depth"]["value"];
    const lineText =
        lang === "en"
            ? `${topValue}°C\u00A0top •\u00A0${bottomValue}°C\u00A0bottom •\u00A0${snowValue}cm\u00A0snow`
            : `${topValue}°C\u00A0topp •\u00A0${bottomValue}°C\u00A0bunn •\u00A0${snowValue}cm\u00A0snødybde`;
    return (
        <div className={cl(className, style.secondLineContent)}>
            {status === "success" ? lineText : ""}
        </div>
    );
};

export default SecondLineContent;
