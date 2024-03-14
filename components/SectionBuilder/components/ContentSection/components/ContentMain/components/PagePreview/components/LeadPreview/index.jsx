import React from "react";

import { ContainerLeadPreview, Lead } from "./components";

const LeadPreview = ({ previewType, lead }) => {
    return (
        <ContainerLeadPreview previewType={previewType}>
            <Lead lead={lead} previewType={previewType} />
        </ContainerLeadPreview>
    );
};

export default LeadPreview;
