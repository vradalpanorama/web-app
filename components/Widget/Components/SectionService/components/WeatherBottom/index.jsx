import {
    Element,
    ElementBottomPart,
    ElementDescription,
    ElementTopPart,
} from "@/components/Widget/Components";
import { ServiceTopValue } from "..";

import cl from "classnames";
import style from "./index.module.scss";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const WeatherBottom = () => {
    const sectionServiceName = "weather-bottom";
    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const serviceSection = getCurrentDictionary("widget")["serviceSection"];

    return (
        <Element
            className={style.weatherBottom}
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

export default WeatherBottom;
