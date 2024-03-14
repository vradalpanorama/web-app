"use client";

import React, { useLayoutEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

const AnimationTap = ({
    className,
    children,
    backgroundColor100,
    borderColor200,
}) => {
    useLayoutEffect(() => {
        document.documentElement.style.setProperty(
            "--animation-tap__100",
            backgroundColor100
        );
        document.documentElement.style.setProperty(
            "--animation-tap__200",
            borderColor200
        );
    }, [backgroundColor100, borderColor200]);

    const [state, setState] = useState({
        down: false,
        up: false,
    });

    const pointerDown = () => {
        setState({
            ...state,
            down: true,
            up: false,
        });
    };

    const pointerLeave = () => {
        if (state.down) {
            setState({
                ...state,
                down: false,
                up: true,
            });
            setTimeout(
                () =>
                    setState({
                        ...state,
                        down: false,
                        up: false,
                    }),
                700
            );
        }
    };

    const pointerUp = () => {
        setState({
            ...state,
            down: false,
            up: true,
        });
        setTimeout(() => {
            setState({
                ...state,
                down: false,
                up: false,
            });
        }, 700);
    };

    return (
        <div
            onPointerDown={() => {
                pointerDown();
            }}
            onPointerLeave={() => {
                pointerLeave();
            }}
            onPointerUp={() => {
                pointerUp();
            }}
            className={cl(
                className,
                style.animation,
                state.down ? style.onDown : null,
                state.up ? style.onUp : null
            )}
        >
            {children}
        </div>
    );
};

export default AnimationTap;
