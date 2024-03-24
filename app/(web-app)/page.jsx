import { PageBuilder } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";

const sanityFetch = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "mainPage": *[
                _type == 'mainPage' && 
                _id == 'mainPage' &&
                !(_id in path("drafts.**"))
            ][0]{
                ...,
                content {
                    no {
                        body[] {
                            ...,
                            _type == 'newsFeedMainPageBlock' => {
                                newsFeed-> {
                                    ...,
                                    manually {
                                        ...,
                                        list[]->
                                    }
                                }
                            } 
                        }
                    }
                },
                header {
                    ...,
                    cover {
                        ...,
                        content {
                            ...,
                            action->
                        }
                    }
                }
            }
        }
        
        `,
    });
    return response;
};

export async function generateMetadata({ params }) {
    const response = await sanityFetch({ params });

    const mainPage = response["result"]["mainPage"];

    return {
        title: mainPage.settings.seoAndSocial.title["no"],
        description: mainPage.settings.seoAndSocial?.description?.no ?? "",
    };
}

export default async function MainPageNO({ params }) {
    const response = await sanityFetch({ params });

    const mainPage = response["result"]["mainPage"];

    return <PageBuilder page={mainPage} lang={"no"} />;
}
