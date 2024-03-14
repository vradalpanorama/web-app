import { CallToActionBanner } from "@/components";
import {
    CoverSectionMain,
    SectionMain,
} from "@/components/_componentsSections";
import { getDictionary } from "@/helpers/i18n/get-dictionary";

import coverTitle from "@/public/images/ski-schook-cover.png"; // убрать !

import img from "@/public/images/cta-ski-school.jpg";
import {
    GroupAndPrivatLessons,
    LevelsGroup,
    SectionDescription,
} from "./sections";

export default async function IndexPage({ params }) {
    const dictionaryRaw = await getDictionary(params.lang);
    const dictionary = JSON.parse(JSON.stringify(dictionaryRaw));
    const dictionaryContent = dictionary["ski-schoolPage"]["content"];
    return (
        <>
            {/* main page */}
            <CoverSectionMain
                coverImg={coverTitle}
                gradientTop={0.3}
                gradientBottom={1}
            />
            <SectionMain
                title={dictionary["ski-schoolPage"]["mainTitle"]}
                action={dictionary["ski-schoolPage"]["subTitleAction"]}
            />
            {/* sections */}
            <SectionDescription dictionary={dictionaryContent["description"]} />
            <GroupAndPrivatLessons
                dictionary={dictionaryContent["groupAndPrivatLessons"]}
            />
            <LevelsGroup dictionary={dictionaryContent["levelsGroup"]} />
            <CallToActionBanner
                img={img}
                dictionary={dictionaryContent["callToAction"]}
            />
        </>
    );
}
