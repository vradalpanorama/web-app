import { Action, Appearance, CallToActionBanner, Title } from "@/components";
import {
    CoverSectionMain,
    SectionMain,
} from "@/components/_componentsSections";
import { getDictionary } from "@/helpers/i18n/get-dictionary";

import coverTitle from "@/public/images/ski-rental.jpeg"; // убрать !

import img from "@/public/images/cta-ski-rental.jpg";
import { SectionA, SectionB, SectionC } from "./sections";

export default async function IndexPage({ params }) {
    // const dictionary = await getDictionary(params.lang);
    const dictionaryRaw = await getDictionary(params.lang);
    const dictionary = JSON.parse(JSON.stringify(dictionaryRaw));
    const dictionaryContent = dictionary["ski-rentalPage"]["content"];
    return (
        <Appearance>
            {/* section main */}
            <CoverSectionMain
                coverImg={coverTitle}
                gradientTop={0.5}
                gradientBottom={0}
            />
            <SectionMain
                title={dictionary["ski-rentalPage"]["mainTitle"]}
                action={dictionary["ski-rentalPage"]["subTitleAction"]}
            />
            {/* sections */}
            <SectionA dictionary={dictionaryContent["section1"]} />
            <SectionB dictionary={dictionaryContent["section2"]} />
            <SectionC dictionary={dictionaryContent["section3"]} />
            <CallToActionBanner
                img={img}
                dictionary={dictionaryContent["callToAction"]}
            />
        </Appearance>
    );
}
