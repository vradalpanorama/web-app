"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ButtonPagination, ContainerBottom, Description } from "./components";
import { usePathname } from "next/navigation";

const ContentBottom = ({ className, bottom }) => {
    const { description, button } = bottom;
    const pathname = usePathname();
    const pathnameList = pathname.split("/")
    const onNewsPage = pathnameList.includes("news");

    return (
        <ContainerBottom>
            <Description description={description} />
            <ButtonPagination buttonTitle={button} onNewsPage={onNewsPage}/>
        </ContainerBottom>
    );
};

export default ContentBottom;
