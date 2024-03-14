"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Poppins } from "next/font/google";

import cl from "classnames";
import style from "./index.module.scss";

import { Appearance, ArrowIcon, Icon } from "@/components";
import { useForm } from "react-hook-form";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal"],
});

const Form = ({ placeholder }) => {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: {
            errors,
            isValid,
            touchedFields,
            isSubmitted,
            isSubmitting,
            isSubmitSuccessful,
        },
    } = useForm();

    const [placeholderText, setPlaceholderText] = useState("email");

    const submit = async (data) => {
        try {
            const response = await fetch("/api/email-subscription", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            });
            console.log(response);
            const responseData = await response.json();
            setPlaceholderText(responseData["message"]);
        } catch (err) {
            console.log(err);
        }
    };

    const error = (data) => {
        console.log(data);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit(submit, error)}>
            <input
                className={cl(
                    poppins.className,
                    style.input,
                    style.inputDefault,
                    isValid ? style.inputGreen : null,
                    isSubmitted ? style.inputRed : null
                )}
                {...register("email", {
                    required: "required field",
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/,
                        message: "invalid form email",
                    },
                    onBlur: () => {
                        setPlaceholderText("please, enter your email");
                    },
                })}
                id="email"
                type="email"
                name="email"
                placeholder={placeholder}
            />

            <button
                className={cl(
                    style.button,
                    isValid ? style.buttonGreen : null,
                    isSubmitted ? style.buttonRed : null
                )}
                type="submit"
            >
                {!isSubmitted && !isSubmitting && (
                    <ArrowIcon className={style.buttonArrow} />
                )}
                {isSubmitting && (
                    <Appearance modal>
                        <div className={style.spinnerLoader}></div>
                    </Appearance>
                )}
                {isSubmitted && !isSubmitting && (
                    <Icon className={style.buttonBlock} type={"block-icon"} />
                )}
            </button>
        </form>
    );
};

export default Form;
