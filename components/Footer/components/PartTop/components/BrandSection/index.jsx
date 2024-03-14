import React from "react";
import { Container, EmailSubscription, Logotype } from "./components";
import { Icon } from "@/components";

import cl from "classnames";
import style from "./index.module.scss";

const BrandSection = () => {
    return (
        <Container>
            <Logotype>
                <Icon
                    type={"logo-sun-uncolor"}
                    className={style.logotypeSunVradal}
                />
                <Icon
                    type={"logo-vradal-panorama"}
                    className={style.logotypeVradalPanorama}
                />
            </Logotype>
            {/* <EmailSubscription /> */}
        </Container>
    );
};

export default BrandSection;
