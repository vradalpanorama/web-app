import { apiFetch } from "@/helpers/sanity/apiFetch";

export default  async function fetchFnuggData() {
    try {
        const response = await apiFetch({ groq: `
        {
            "resortWidgetData": *[_type == 'resortWidget' && !(_id in path("drafts.**"))][0]{
                "isWinterSeason": isWinterSeason,
                "skiTracksConditions": skiTracksConditions,
                "serviceSectionMaxWidth": serviceSectionMaxWidth,
                "serviceSectionList": serviceSection,
                "promoSection": promoSection[0...3]->{
                    "iconNameComponent": iconNameComponent,
                    "iconContentLang": iconContentLang,
                    "href": href->
                }
            }
        }
        `})
        const sanityData =  await response["result"]
        return sanityData;
    } catch (err) {
        return {
            error: err,
        };
    }
}


