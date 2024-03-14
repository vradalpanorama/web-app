import { NextResponse } from "next/server";
import { getSlug } from "./getSlug";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get("ref");
    if (reference) {
        const slugAndTypeResponse = await getSlug(reference)
        return NextResponse.json({ message: slugAndTypeResponse }, { status: 200 });
    }

    return NextResponse.json({ message: "notFound" }, { status: 404 });
}
