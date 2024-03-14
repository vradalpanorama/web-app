import { notFound } from "next/navigation";
import { Content, SubpageHeader } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";
import React from "react";
import cl from "classnames";
import style from "./page.module.scss";

const AccommodationPage = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "accommodationPage": *[_type == 'accommodationPage' && slug.current == '${params.slug}'][0]{
                ...,
                content {
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

    const { accommodationPage } = await response["result"];

    if (!accommodationPage) {
        notFound();
    }

    const { content, subpageHeader } = await accommodationPage;

    return (
        <>
            <SubpageHeader subpageHeader={subpageHeader} lang={params.lang} />
            <Content
                className={style.accommodationPageContent}
                body={content[params.lang]["body"]}
            />
        </>
    );
};

export default AccommodationPage;
