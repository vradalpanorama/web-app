import {
    Element,
    ElementBottomPart,
    ElementDescription,
    ElementTopPart,
} from "@/components/Widget/Components";
import { ServiceTopValue } from "..";
import { useInternationalizationState } from "@/helpers/zustandStores/internationalizationState";

const Slopes = () => {
    const sectionServiceName = "slopes";
    const [getCurrentDictionary] = useInternationalizationState((state) => [
        state.getCurrentDictionary,
    ]);
    const serviceSection = getCurrentDictionary("widget")["serviceSection"];

    return (
        <Element
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

export default Slopes;
