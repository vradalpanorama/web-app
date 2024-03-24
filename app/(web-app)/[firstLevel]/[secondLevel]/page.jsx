import { notFound } from "next/navigation";
import { apiFetch } from "@/helpers/sanity/apiFetch";
import { PageBuilder } from "@/components";

const sanityFetch = async ({ params }) => {
    const response = await apiFetch({
        groq: `
        {
            "page": *[
                _type == 'page' && 
                settings.pathname.isSectionPage == true && 
                settings.pathname.section->slug.current == '${params["firstLevel"]}' &&
                settings.pathname.slug.current == '${params["secondLevel"]}' &&
                !(_id in path("drafts.**"))
            ][0]{
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
                _type == 'page' && 
                settings.pathname.isSectionPage == true &&
                !(_id in path("drafts.**"))
            ]{
                settings{
                     pathname{
                        ...,
                        section->{
                            slug
                        }
                    }
                }
            }
        }`,
    });

    return response["result"]["pages"].map((page) => ({
        firstLevel: page.settings.pathname.section.slug.current,
        secondLevel: page.settings.pathname.slug.current,
    }));
}

export async function generateMetadata({ params }) {
    const response = await sanityFetch({ params });

    const page = response["result"]["page"];

    if (!page) return null;

    return {
        title: page.settings.seoAndSocial.title["no"],
        description: page.settings.seoAndSocial?.description?.no ?? "",
    };
}

export default async function SecondLevelNO({ params }) {
    const response = await sanityFetch({ params });

    const page = response["result"]["page"];

    if (!page) {
        notFound();
    }

    return <PageBuilder page={page} lang={"no"} />;
}
