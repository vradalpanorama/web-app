import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { GradientBottom, GradientTop } from "./components";

const Gradients = ({ className, gradients }) => {
    const { gradientTop, gradientBottom } = gradients;
    return (
        <React.Fragment>
            <GradientTop gradient={gradientTop} />
            <GradientBottom gradient={gradientBottom} />
        </React.Fragment>
    );
};

export default Gradients;
