import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useWidgetServiceSectionDataState } from "@/helpers/zustandStores/widgetState";
import { useGetLang } from "@/hooks";

const TopLineContent = ({ className }) => {
    const lang = useGetLang();
    const [status, serviceData] = useWidgetServiceSectionDataState((state) => [
        state.status,
        state.widgetServiceSectionData,
    ]);
    const elevatorsValue = serviceData?.["elevators"]["value"];
    const slopesValue = serviceData?.["slopes"]["value"];
    const lineText =
        lang === "en"
            ? `Open ${elevatorsValue}\u00A0elevators •\u00A0${slopesValue}\u00A0slopes`
            : `Åpne ${elevatorsValue}\u00A0heiser •\u00A0${slopesValue}\u00A0bakker`;
    const loadingText = lang === "en" ? "Loading..." : "Lasting...";
    const errorText = lang === "en" ? "error" : "feil";
    const pleaseWaitText = lang === "en" ? "Please wait" : "Vennligst vent";
    
    return (
        <div className={cl(className, style.topLineContent)}>
            {status === "success"
                ? lineText
                : status === "loading"
                ? loadingText
                : status === "error"
                ? errorText
                : pleaseWaitText}
        </div>
    );
};

export default TopLineContent;
