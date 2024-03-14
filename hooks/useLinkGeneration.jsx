import { useGetLang } from ".";

export default function useLinkGeneration() {
    const lang = useGetLang();

    const getLink = (section) => {
        if (lang === "en") {
            const linkPaths = [lang, section];
            const link = "/" + linkPaths.join("/");
            return link;
        } else {
            return "/" + section;
        }
    };

    return getLink;
}
