import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    datasetName: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
    dataCache: process.env.NEXT_PUBLIC_SANITY_DATA_CACHE,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    apiQueryEndpoint: process.env.NEXT_PUBLIC_SANITY_API_QUERY_ENDPOINT,
    apiClientViewerToken: process.env.NEXT_PUBLIC_SANITY_API_CLIENT_VIEWER_TOKEN,
};

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: process.env.NEXT_PUBLIC_SANITY_API_CLIENT_VIEWER_TOKEN,
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
