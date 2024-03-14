"use client";
import React, { useEffect } from "react";
import cl from "classnames";

import style from "./index.module.scss";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";
import { useGetLang } from "@/hooks";

const PageContent = ({ dictionaries, children }) => {
    const lang = useGetLang();
    const [statusState, langState, setDictionaries] =
        useInternationalizationState((state) => [
            state.status,
            state.lang,
            state.setDictionaries,
        ]);

    useEffect(() => {
        if (statusState === "default" || langState !== lang) {
            setDictionaries(dictionaries, lang);
        }
    }, [dictionaries, statusState, setDictionaries, langState, lang]);

    return <>{children}</>;
};

export default PageContent;
