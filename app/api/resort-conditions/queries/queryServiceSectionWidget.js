import { format } from "date-fns";
import { nb, enGB } from "date-fns/locale";

function formatSkiTracksConditions(skiTracksConditions, trackNumber) {
    const { isDisplayed, lastGroomedDate } = skiTracksConditions[trackNumber];
    if (isDisplayed) {
        const dateLastGroomedObj = new Date(Date.parse(lastGroomedDate));
        const dateLastGroomedFormat = format(dateLastGroomedObj, "d:MMM", {
            // locale: lang === "en" ? enGB : nb,
            locale: enGB,
        });
        const [dayLastGroomed, mounthLastGroomed] = dateLastGroomedFormat
            .toLowerCase()
            .split(":");
        return ["ski-tracks", dayLastGroomed, mounthLastGroomed];
    } else {
        return [null, null, null];
    }
}

function queryServiceSectionWidget({
    resortData,
    // sanityData
}) {
    const weather = resortData["conditions"]["combined"];
    const snow = weather["top"]["snow"]["depth_slope"];
    const elevators = resortData["lifts"];
    const slopes = resortData["slopes"];

    // const {
    //     isWinterSeason,
    //     skiTracksConditions,
    //     serviceSectionMaxWidth,
    //     serviceSectionList,
    //     promoSection,
    // } = sanityData;

    const response = {};

    // response["serviceSectionMaxWidth"] = serviceSectionMaxWidth;
    // response["serviceSectionList"] = serviceSectionList;
    // response["promoSection"] = promoSection;

    response["weather-top"] = {
        icon: `resort-weather-${weather["top"]["symbol"]["fnugg_id"]}`,
        value: weather["top"]["temperature"]["value"],
        unit: "°C",
    };

    response["weather-bottom"] = {
        icon: `resort-weather-${weather["bottom"]["symbol"]["fnugg_id"]}`,
        value: weather["bottom"]["temperature"]["value"],
        unit: "°C",
    };

    response["weather-snow-depth"] = {
        icon: "weather-snow-depth",
        value: snow ? snow : 0,
        unit: "cm",
    };

    response["elevators"] = {
        icon: null,
        value: elevators["open"],
        unit: `/${elevators["count"]}`,
    };

    response["slopes"] = {
        icon: null,
        value: slopes["open"],
        unit: `/${slopes["count"]}`,
    };

    response["webcam"] = {
        icon: "webcam",
        // value: 4,
        // unit: '/4',
    };

    // if (isWinterSeason) {
    //     const skiTrack1 = formatSkiTracksConditions(
    //         skiTracksConditions,
    //         "skiTrack1"
    //     );
    //     response["skiTrack1"] = {
    //         icon: skiTrack1[0],
    //         value: skiTrack1[1],
    //         unit: skiTrack1[2],
    //     };

    //     const skiTrack2 = formatSkiTracksConditions(
    //         skiTracksConditions,
    //         "skiTrack2"
    //     );
    //     response["skiTrack2"] = {
    //         icon: skiTrack2[0],
    //         value: skiTrack2[1],
    //         unit: skiTrack2[2],
    //     };

    //     const skiTrack3 = formatSkiTracksConditions(
    //         skiTracksConditions,
    //         "skiTrack3"
    //     );
    //     response["skiTrack3"] = {
    //         icon: skiTrack3[0],
    //         value: skiTrack3[1],
    //         unit: skiTrack3[2],
    //     };

    //     const skiTrack4 = formatSkiTracksConditions(
    //         skiTracksConditions,
    //         "skiTrack4"
    //     );
    //     response["skiTrack4"] = {
    //         icon: skiTrack4[0],
    //         value: skiTrack4[1],
    //         unit: skiTrack4[2],
    //     };
    // }

    return response;
}

export default queryServiceSectionWidget;
