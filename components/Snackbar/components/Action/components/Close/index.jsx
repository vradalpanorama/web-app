import { Icon } from "@/components";
import React from "react";
import cl from 'classnames';
import style from './index.module.scss';

const Close = ({ className }) => {
    return <Icon type={"close-icon"} className={cl(className, style.iconClose)} />;
};

export default Close;
