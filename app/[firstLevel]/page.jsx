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

export async function generateStaticParams() {
    const response = await apiFetch({
        groq: `
        {
            "pages": *[
                _type in ['news', 'page', 'section'] && 
                (
                    (settings.pathname.isSectionPage == false && _type == 'page') ||
                    (_type == 'section') ||
                    (_type == 'news')
                ) &&
                !(_id in path("drafts.**"))
            ]{
                ...
            }
        }`,
    });
    const pages = response["result"]["pages"];

    return pages.map((page) => {
        const { _type } = page;

        switch (_type) {
            case "page":
                return {
                    firstLevel: page.settings.pathname.slug.current,
                };
            case "section":
                return {
                    firstLevel: page.slug.current,
                };
            case "news":
                return {
                    firstLevel: page.settings.slug.current,
                };
        }
    });
}

export async function generateMetadata({ params }) {
    const response = await sanityFetch({ params });

    const firstLevelPage = response["result"]["firstLevelPage"];

    const { _type } = firstLevelPage;

    switch (_type) {
        case "news":
            return {
                title: firstLevelPage.settings.seoAndSocial.title["no"],
                description:
                    firstLevelPage.settings.seoAndSocial?.description?.no ?? "",
            };
        case "section":
            return {
                title: firstLevelPage.title["no"],
                description: "",
            };
        case "page":
            return {
                title: firstLevelPage.settings.seoAndSocial.title["no"],
                description:
                    firstLevelPage.settings.seoAndSocial?.description?.no ?? "",
            };
    }
}

export default async function firstLevelNO({ params }) {
    const response = await sanityFetch({ params });

    const firstLevelPage = response["result"]["firstLevelPage"];

    if (!firstLevelPage) {
        notFound();
    }

    const { _type } = firstLevelPage;

    return (
        <>
            {_type === "news" && (
                <NewsBuilder news={firstLevelPage} lang={"no"} />
            )}
            {_type === "section" && (
                <SectionBuilder section={firstLevelPage} lang={"no"} />
            )}
            {_type === "page" && (
                <PageBuilder page={firstLevelPage} lang={"no"} />
            )}
        </>
    );
}
