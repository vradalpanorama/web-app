/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useLayoutEffect } from "react";

const queries = [
    "(max-width: 743px)",
    "(max-width: 1100px) and (min-width: 744px)",
    "(min-width: 1101px)",
];

export default function useMatchMedia() {
    if (typeof window === "undefined") return {};

    const mediaQueryLists = queries.map((query) => matchMedia(query));

    const getValues = () => mediaQueryLists.map((mql) => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((mql) =>
            mql.addEventListener("change", handler)
        );

        return () =>
            mediaQueryLists.forEach((mql) =>
                mql.removeEventListener("change", handler)
            );
    });

    return ["isMobile", "isTablet", "isDesktop"].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );
}
