import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { ContainerTwoCells } from "./components";
import { BlockDetails, BlockText, BlockImage } from "@/components/BlocksContent";
import { SectionContent } from "@/components";

const cellsComponents = {
    detailsBlock: BlockDetails,
    textBlock: BlockText,
    imageBlock: BlockImage,
};

const TwoCells = ({ data, className }) => {
    const { cell, layoutSettings } = data;
    const {
        desktopWidthFormatLayout,
        desktopAlignFormatLayout,
        mobileFormatLayout,
    } = layoutSettings;
    const desktopWidthFormatLayoutList = desktopWidthFormatLayout.split(":");
    const mobileFormatLayoutList = mobileFormatLayout.split(":");
    return (
        <SectionContent className={cl(className)}>
            <ContainerTwoCells>
                {cell.map((cell, key) => {
                    const CellComponent = cellsComponents[cell["_type"]];
                    return (
                        <CellComponent
                            key={key}
                            props={cell}
                            desktopWidth={desktopWidthFormatLayoutList[key]}
                            desktopAlign={desktopAlignFormatLayout}
                            mobileOrder={mobileFormatLayoutList[key]}
                        />
                    );
                })}
            </ContainerTwoCells>
        </SectionContent>
    );
};

export default TwoCells;
