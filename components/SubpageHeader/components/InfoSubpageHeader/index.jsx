"use client";
import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import SVG from 'react-inlinesvg'

const InfoSubpageHeader = ({ className, info, lang }) => {
    // const [isLoadedIcon, setLoadedIcon] = useState(false);
    const { icon, text } = info;

    // useEffect(() => {
    //     if (!icon) {
    //         setLoadedIcon(true);
    //     }
    // }, [setLoadedIcon, icon]);

    return (
        <div
            className={cl(
                className,
                style.infoSubpageHeader,
                style.infoSubpageHeaderLoaded
                // isLoadedIcon
                //     ? style.infoSubpageHeaderLoaded
                //     : style.infoSubpageHeaderLoading
            )}
        >
            {icon && (
                <SVG
                    src={icon.svg}
                    style={{
                        width: '1.5rem',
                        height: '1.5rem'
                    }}
                    className={cl(
                        style.infoSubpageHeaderIcon,
                        style.infoSubpageHeaderIconLoaded
                        // isLoadedIcon ? style.infoSubpageHeaderIconLoaded : null
                    )}
                    // onLoad={() => setLoadedIcon(true)}
                />
            )}
            <span
                className={cl(
                    style.infoSubpageHeaderText,
                    style.infoSubpageHeaderTextLoaded
                    // isLoadedIcon ? style.infoSubpageHeaderTextLoaded : null
                )}
            >
                {text[lang]}
            </span>
        </div>
    );
};

export default InfoSubpageHeader;
