import { usePathname } from "next/navigation";

import cookie from "@boiseitguru/cookie-cutter";

export default function useLocalSwitcher() {
    const pathname = usePathname();
    const segments = pathname.split("/");

    const getLinkLocalSwitcher = () => {
        // if (!pathname) return "/";
        if (segments[1] === "en") {
            segments.shift();
            segments.shift();
            segments.unshift("");
            return segments.join("/");
        } else {
            segments.shift();
            segments.unshift("en");
            segments.unshift("");
            return segments.join("/");
        }
    };

    const changeLocaleCookies = (lang) => {
        // const now = new Date();
        // const time = now.getTime();
        // const expiresTime = time + 1000 * 60;
        // now.setTime(expiresTime);
        const valueLocale = lang === "en" ? "no" : "en";
        cookie.set("locale", valueLocale, {
            path: "/",
            // expires: now,
        });
    };

    return [getLinkLocalSwitcher, changeLocaleCookies];
}
