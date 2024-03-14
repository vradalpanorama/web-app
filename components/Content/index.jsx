import React from "react";
import { PortableText } from "@portabletext/react";

import cl from "classnames";
import style from "./index.module.scss";
import { NewsFeed, SectionContent, Widget } from "@/components";
import { ImageContent, Banner, TwoCells } from "./components";

const components = {
    types: {
        imageBlock: (props) => (
            <ImageContent
                className={style.contentPage}
                imageBlock={props.value}
            />
        ),
        // bannerBlock: (props) => (
        //     <Banner className={style.contentPage} bannerData={props.value} />
        // ),
        twoCellsBlock: (props) => (
            <TwoCells className={style.contentPage} data={props.value} />
        ),
        resortWidgetMainPageBlock: (props) => <Widget />,
        newsFeedMainPageBlock: (props) => <NewsFeed newsFeed={props.value} />,
    },
};

const Content = ({ className, body }) => {
    return (
        <SectionContent>
            <div className={cl(className, style.content)}>
                <PortableText value={body} components={components} />
            </div>
        </SectionContent>
    );
};

export default Content;
