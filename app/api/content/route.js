import { NextResponse } from "next/server";
import { client } from "@/helpers/sanity/client";

export async function GET(req) {
    const { page } = await loadPageData();
    return NextResponse.json({ message: page }, { status: 200 });
}

export async function loadPageData() {
    const query = `{
        "page": *[_type == 'mainPage']
    }`;

    const { page } = await client.fetch(query);

    return { page };
}
