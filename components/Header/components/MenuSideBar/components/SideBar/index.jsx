import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Placeholder, Sections, SubSections } from "./components";
import { useNavigationSidebar } from "@/helpers/zustandStores/headerState";


const SideBar = ({ className }) => {
    const [activeSectionParams] = useNavigationSidebar((state)=>[state.activeSectionParams])
    return (
        <React.Fragment>
            <Placeholder /> 
            {!activeSectionParams && <Sections />}
            {activeSectionParams && <SubSections />}
        </React.Fragment>
    );
};

export default SideBar;
