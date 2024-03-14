import React from "react";

import { ContainerLeadPreview, Lead } from "./components";

const LeadPreview = ({ newsType, lead }) => {
    return (
        <ContainerLeadPreview newsType={newsType}>
            <Lead lead={lead} newsType={newsType} />
        </ContainerLeadPreview>
    );
};

export default LeadPreview;
