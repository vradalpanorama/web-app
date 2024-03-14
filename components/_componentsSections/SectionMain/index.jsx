"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHeaderState } from "@/helpers/zustandStores/headerState";
import cl from "classnames";
import style from "./index.module.scss";
import { Action, Title } from "@/components";
import { useTypingEffect } from "@/hooks";

const SectionMain = ({ title, action, className }) => {
    // const [titleText, isTitleTypingCompleted] = useTypingEffect(title, 50);

    const setOnCover = useHeaderState((state) => state.setOnCover);
    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: "-50px 0px 0px 0px",
    });

    useEffect(() => {
        setOnCover(inView);
    }, [inView, setOnCover]);

    return (
        <section ref={ref} className={cl(className, style.sectionMain)}>
            <Title
                className={cl(
                    // isTitleTypingCompleted ? null : style.title,
                    // titleText ? null : style.titleLoading
                )}
                type={"SectionMain"}
            >
                {title}
            </Title>
            <Action>{action}</Action>
        </section>
    );
};

export default SectionMain;
