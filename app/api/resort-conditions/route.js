import { NextResponse } from "next/server";
import { fetchFnuggData } from "./fetch";
import {
    queryElevatorsAndSlopes,
    queryServiceSectionWidget,
    queryWeather,
} from "./queries";

export async function GET(req) {
    const fnuggData = await fetchFnuggData();
    // const sanityData = await fetchSanityData();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (fnuggData.error) {
        // console.log(fnuggData.error);
        return NextResponse.json(
            {
                error: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }

    switch (query) {
        case "service-section-widget":
            return NextResponse.json(
                queryServiceSectionWidget({
                    resortData: fnuggData["_source"],
                    // sanityData: sanityData["resortWidgetData"],
                })
            );
        case "weather":
            return NextResponse.json(
                queryWeather({
                    weatherData: fnuggData["_source"]["conditions"],
                })
            );
        case "elevators-and-slopes":
            return NextResponse.json(
                queryElevatorsAndSlopes({
                    elevatorsData: fnuggData["_source"]["lifts"],
                    slopesData: fnuggData["_source"]["slopes"],
                })
            );
        default:
            return NextResponse.json(
                {
                    error: `not found on request: ${query}`,
                },
                {
                    status: 404,
                }
            );
    }
}
