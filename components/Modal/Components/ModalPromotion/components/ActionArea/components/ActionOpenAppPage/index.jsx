import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";
import Link from "next/link";

const ActionOpenAppPage = ({ className, children }) => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const link = promotionData["content"]["href"];

    return (
        <Link href={link}>
            {children}
        </Link>
    );
};

export default ActionOpenAppPage;
