import { clientConfig } from "./client";

export async function apiFetch({ groq, cache = clientConfig.dataCache }) {
    const groqQuery = encodeURIComponent(groq);
    const urlApi = `https://${clientConfig.projectId}.${clientConfig.apiQueryEndpoint}.sanity.io/${clientConfig.apiVersion}/data/query/${clientConfig.datasetName}?query=${groqQuery}`;
    const response = await fetch(urlApi, {
        headers: {
            Authorization: `Bearer ${clientConfig.apiClientViewerToken}`,
        },
        cache,
    });
    const responseJson = await response.json();
    return responseJson;
}
