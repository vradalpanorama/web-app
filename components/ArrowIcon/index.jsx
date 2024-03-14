"use client";
import React from "react";
import cl from "classnames";

import style from "./index.module.scss";

const ArrowIcon = ({ className }) => {
    return (
        <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cl(className, style.arrowIcon)}
        >
            <path
                id="coolicon"
                d="M1.11125 19.2934C1.50181 19.6837 2.13479 19.6836 2.52521 19.2931L11.1113 10.7071C11.5018 10.3166 11.5018 9.68342 11.1113 9.29289L2.52521 0.706856C2.13478 0.316429 1.50181 0.316319 1.11125 0.706608L0.858363 0.959314C0.467584 1.34982 0.467494 1.98322 0.858164 2.37383L7.77816 9.29284C8.16875 9.68338 8.16875 10.3166 7.77816 10.7072L0.858164 17.6262C0.467494 18.0168 0.467584 18.6502 0.858364 19.0407L1.11125 19.2934Z"
            />
        </svg>
    );
};

export default ArrowIcon;
