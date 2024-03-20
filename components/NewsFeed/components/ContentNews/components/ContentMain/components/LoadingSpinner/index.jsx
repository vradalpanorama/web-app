import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

const LoadingSpinner = () => {
    const colorsRandom = Math.random();

    return (
        <div className={style.container}>
            <svg
                className={style.spinner}
                width="65px"
                height="65px"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className={cl(
                        style.path,
                        colorsRandom < 0.33
                            ? style.colors_1
                            : colorsRandom < 0.66
                            ? style.colors_2
                            : style.colors_3
                    )}
                    fill="none"
                    stroke-width="6"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                ></circle>
            </svg>
        </div>
    );
};

export default LoadingSpinner;
