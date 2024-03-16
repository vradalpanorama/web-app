import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const LoadingSpinner = () => {
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
                    className={style.path}
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
