import React from "react";

import { notFound } from "next/navigation";

import { Content, SubpageHeader } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";

import cl from "classnames";
import style from "./page.module.scss";

const ActivitiesPage = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "activitiesPage": *[_type == 'activitiesPage' && slug.current == '${params.slug}'][0]{
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
    const { activitiesPage } = await response["result"];

    if (!activitiesPage) {
        notFound();
    }

    const { content, subpageHeader } = await activitiesPage;

    return (
        <>
            <SubpageHeader subpageHeader={subpageHeader} lang={params.lang} />
            <Content
                className={style.activitiesPageContent}
                body={content[params.lang]["body"]}
            />
        </>
    );
};

export default ActivitiesPage;
