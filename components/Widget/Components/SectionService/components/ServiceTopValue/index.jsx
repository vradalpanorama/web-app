import { useWidgetServiceSectionDataState } from "@/helpers/zustandStores/widgetState";
import React, { Fragment } from "react";
import {
    ElementIcon,
    ElementSkeletonValue,
    ElementValue,
} from "@/components/Widget/Components";

const ServiceTopValue = ({ section }) => {
    const [status, serviceData] = useWidgetServiceSectionDataState((state) => [
        state.status,
        state.widgetServiceSectionData,
    ]);
    return (
        <Fragment>
            {status === "success" && serviceData[section]["icon"] && (
                <ElementIcon type={serviceData[section]["icon"]} />
            )}
            {status === "success" && (
                <ElementValue
                    value={serviceData[section]["value"]}
                    unit={serviceData[section]["unit"]}
                />
            )}
            {status === "loading" && <ElementSkeletonValue />}
            {status === "error" && <ElementIcon type={"error-icon"} />}
        </Fragment>
    );
};

export default ServiceTopValue;
