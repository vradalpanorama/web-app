"use client";

import React, { useState } from "react";
import cl from "classnames";

import style from "./index.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal"],
});

const Button = ({ children, className, onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            className={cl(className, poppins.className, style.button)}
            onClick={onClick ? () => onClick() : null}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
