import { apiFetch } from "@/helpers/sanity/apiFetch";

export async function getSlug(reference) {
    try {
        const response = await apiFetch({
            groq: `*[_id == "${reference}"][0]{_type, slug}`,
        });
        return response["result"];
    } catch (err) {
        console.error("apiFetch Sanity:", err);
        return `error: ${err}`;
    }
}
