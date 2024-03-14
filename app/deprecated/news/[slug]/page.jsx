import { Content, NewsHeader } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";
import React from "react";
import cl from "classnames";
import style from "./page.module.scss";
const NewsPage = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "news": *[_type == 'news' && slug.current == '${params.slug}'][0]{
                ...,
                newsContent {
                    ...,
                    en {
                        ...,
                        body[] {
                            ...,
                            select( _type == "banner" ) => {
                                action->  
                           },
                        }
                    },
                    no {
                        ...,
                        body[] {
                            ...,
                            select( _type == "banner" ) => {
                                action->  
                           },
                        }
                    },
                }
            }
        }
    `,
    });
    const { news } = await response["result"];

    return (
        <>
            <NewsHeader newsObj={news} />
            <Content
                className={style.newsContent}
                body={news["newsContent"][params.lang]["body"]}
            />
        </>
    );
};

export default NewsPage;
