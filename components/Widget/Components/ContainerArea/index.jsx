"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useWidgetServiceSectionDataState, useWidgetState } from "@/helpers/zustandStores/widgetState";
import { useHeaderState } from "@/helpers/zustandStores/headerState";
import cl from "classnames";

import style from "./index.module.scss";

const ContainerArea = ({ children, className }) => {

    const { fixedPosition } = useWidgetState((state) => state);
    const { setOnContent } = useHeaderState((state) => state);
    const {state} = useWidgetServiceSectionDataState((state) => state);

    const { ref, inView } = useInView({
        threshold: 1,
    });
    useEffect(() => {
        setOnContent(inView);
    }, [inView]);
    return (
         <div
            ref={ref}
            className={cl(
                className,
                style.containerArea,
                !fixedPosition ? style.containerAreaFixed  : null 
            )}
        >
            {children}
        </div>
    );
};

export default ContainerArea;
