import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";

const SocialNetwork = ({ className, type, href }) => {
    return (
        <a className={cl(className, style.socialNetwork)} href={href} target="_blank">
            <Icon type={type} className={style.socialNetworkIcon} />
        </a>
    );
};

export default SocialNetwork;
