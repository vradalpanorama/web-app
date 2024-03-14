import { apiFetch } from "@/helpers/sanity/apiFetch";
import { NextResponse } from "next/server";
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const activeTab = searchParams.get("activeTab");
    const countPreview = searchParams.get("countPreview");
    const numberStartNewsFeed = searchParams.get("numberStartNewsFeed");
    const getUpcomingEvents = searchParams.get("upcomingEvents");

    console.log(
        activeTab,
        countPreview,
        numberStartNewsFeed,
        getUpcomingEvents
    );

    if (!["all", "news", "events"].includes(activeTab)) {
        return NextResponse.json(
            {
                error: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }

    const response = await apiFetch({
        groq: `
    {
        "news":  
        *[
            _type == 'news' && 
            settings.isPrivate == false && 
            ${activeTab === "news" ? "settings.typeNews == 'news' &&" : ""}
            ${activeTab === "events" ? "settings.typeNews == 'event' &&" : ""}
            !(_id in path("drafts.**"))
        ] | order(settings.datePub desc)
        [${numberStartNewsFeed ? numberStartNewsFeed : "0"}
        ...
        ${countPreview}]
        {
            ...
        }, 
        ${
            getUpcomingEvents === "get"
                ? `"upcomingEvents": count(*[_type == 'news' && settings.isPrivate == false && settings.typeNews == 'event' && dateTime(datePub) >= dateTime(now()) && !(_id in path("drafts.**"))])`
                : ``
        }
    }
    `,
    });

    const news = await response["result"]["news"];
    const upcomingEvents = await response["result"]["upcomingEvents"];
    if (news) {
        return NextResponse.json({ news, upcomingEvents });
    } else {
        return NextResponse.json(
            {
                error: "Not found",
            },
            {
                status: 404,
            }
        );
    }
}
