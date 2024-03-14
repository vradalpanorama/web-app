import cl from "classnames";
import style from "./index.module.scss";

import {
    Element,
    ElementBottomPart,
    ElementDescription,
    ElementTopPart,
} from "@/components/Widget/Components";
import { ServiceTopValue } from "..";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const WeatherTop = () => {
    const sectionServiceName = "weather-top";

    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const serviceSection = getCurrentDictionary("widget")["serviceSection"];

    return (
        <Element
            className={style.weatherTop}
            typeParametrs={"service"}
            sectionParametrs={sectionServiceName}
            column
        >
            <ElementTopPart>
                <ServiceTopValue section={sectionServiceName} />
            </ElementTopPart>
            <ElementBottomPart>
                <ElementDescription
                    description={serviceSection[sectionServiceName]}
                    split

                />
            </ElementBottomPart>
        </Element>
    );
};

export default WeatherTop;
