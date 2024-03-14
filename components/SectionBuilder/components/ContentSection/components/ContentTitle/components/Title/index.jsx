"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";

const Title = ({ className, titleSection }) => {
    return <span className={cl(className, style.title)}>{titleSection}</span>;
};

export default Title;
