import { NewsBuilder, PageBuilder, SectionBuilder } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";
import { notFound } from "next/navigation";

const sanityFetch = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "firstLevelPage": *[
                _type in ['news', 'page', 'section'] && 
                (
                    (settings.pathname.isSectionPage == false && settings.pathname.slug.current == '${params["firstLevel"]}') ||
                    (settings.slug.current == '${params["firstLevel"]}') ||
                    (slug.current == '${params["firstLevel"]}')
                ) &&
                !(_id in path("drafts.**"))
            ][0]{
                ...,
                _type == 'news' => {
                    ...
                },
                _type == 'page' => {
                    ...,
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
                },
                _type == 'section' => {
                    ...,
                    pagesSection[]->{
                        ...,
                        _type == "page" => {
                            ..., settings{
                               ..., pathname{
                                    ...,
                                    section->{
                                        slug
                                    }
                                }
                            }
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

    const firstLevelPage = response["result"]["firstLevelPage"];

    const { _type } = firstLevelPage;

    switch (_type) {
        case "news":
            return {
                title: firstLevelPage.settings.seoAndSocial.title["en"],
                description:
                    firstLevelPage.settings.seoAndSocial?.description?.en ?? "",
            };
        case "section":
            return {
                title: firstLevelPage.title["en"],
                description: "",
            };
        case "page":
            return {
                title: firstLevelPage.settings.seoAndSocial.title["en"],
                description:
                    firstLevelPage.settings.seoAndSocial?.description?.en ?? "",
            };
    }
}

export default async function firstLevelEN({ params }) {
    const response = await apiFetch({
        groq: `
        {
            "firstLevelPage": *[
                _type in ['news', 'page', 'section'] && 
                (
                    (settings.pathname.isSectionPage == false && settings.pathname.slug.current == '${params["firstLevel"]}') ||
                    (settings.slug.current == '${params["firstLevel"]}') ||
                    (slug.current == '${params["firstLevel"]}')
                ) &&
                !(_id in path("drafts.**"))
            ][0]{
                ...,
                _type == 'news' => {
                    ...
                },
                _type == 'page' => {
                    ...,
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
                },
                _type == 'section' => {
                    ...,
                    pagesSection[]->{
                        ...,
                        _type == "page" => {
                            ..., settings{
                               ..., pathname{
                                    ...,
                                    section->{
                                        slug
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `,
    });

    const firstLevelPage = response["result"]["firstLevelPage"];

    if (!firstLevelPage) {
        notFound();
    }

    const { _type } = firstLevelPage;

    return (
        <>
            {_type === "news" && (
                <NewsBuilder news={firstLevelPage} lang={"en"} />
            )}
            {_type === "section" && (
                <SectionBuilder section={firstLevelPage} lang={"en"} />
            )}
            {_type === "page" && (
                <PageBuilder page={firstLevelPage} lang={"en"} />
            )}
        </>
    );
}
