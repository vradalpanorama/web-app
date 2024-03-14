import { apiFetch } from "@/helpers/sanity/apiFetch";
import { notFound, redirect } from "next/navigation";
export const metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
    },
};

export default async function RedirectPage({ searchParams }) {
    const response = await apiFetch({
        groq: `
        {
        "externalLink": *[_type == 'externalLink' && queryParameter.current == '${searchParams["to"]}' && !(_id in path("drafts.**"))][0]{
            ...
        }
    }
    `,
    });
    const externalLink = response["result"]["externalLink"];
    if (externalLink) {
        redirect(externalLink["linkURL"]);
    } else {
        notFound();
    }
    return <div>Redirect</div>;
}
