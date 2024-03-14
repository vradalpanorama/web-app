import { Fragment } from "react";

import style from "./page.module.scss";

import { Banner, Cover, NewsFeed, Widget } from "@/components";
import { apiFetch } from "@/helpers/sanity/apiFetch";
// import { getDictionary } from "../../helpers/i18n/get-dictionary";

export default async function IndexPage({ params }) {
    // const dictionary = await getDictionary(params.lang);
    const today = new Date(2023, 10, 10)

    const response = await apiFetch({
        groq: `
        {
            "coverObj": *[_type == 'mainPage' && isPublicMainPage == true && !(_id in path("drafts.**"))][0]{
                "cover": coverPage,
                "slugAction": coverPage.coverContent.actionType->,
                newsFeedSettings
            },
            "newsFeedLists": {
                "all": *[_type == 'news' && isPrivate == false && !(_id in path("drafts.**"))] | order(datePub desc),
                "news": *[_type == 'news' && isPrivate == false && typePub == 'news' && !(_id in path("drafts.**"))] | order(datePub desc),
                "events": *[_type == 'news' && isPrivate == false && typePub == 'event' && !(_id in path("drafts.**"))] | order(datePub desc),
                "countUpcomingEvents": count(*[_type == 'news' && isPrivate == false && typePub == 'event' && dateTime(datePub) >= dateTime(now()) && !(_id in path("drafts.**"))])
            } 
        }
    `,
    });

    const { coverObj, newsFeedLists } = await response["result"];
    const { cover, slugAction, newsFeedSettings } = await coverObj;

    return (
        <Fragment>
            <Cover coverPage={cover} slugAction={slugAction} />
            <Widget />
            <NewsFeed
                newsFeedLists={newsFeedLists}
                newsFeedSettings={newsFeedSettings}
            />
            <Banner />
        </Fragment>
    );
}
