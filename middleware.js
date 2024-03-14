import { NextResponse } from "next/server";

import { i18n } from "./helpers/i18n/i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    const locales = i18n.locales;

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales
    );

    const locale = matchLocale(languages, locales, i18n.defaultLocale);

    return locale;
}

function routingLocalization(locale, request) {
    const pathname = request.nextUrl.pathname;
    const pathnameWithLocaleEN =
        pathname.startsWith("/en/") || pathname === "/en";

    if (pathnameWithLocaleEN && locale === "no") {
        const newPathname = pathname.split("/en")[1];
        const url = new URL(newPathname, request.url.split("/en").join("/"));
        return NextResponse.redirect(url);
        
    } else if (!pathnameWithLocaleEN && locale === "en") {
        const url = new URL(
            `/en${pathname.startsWith("/") ? "" : "/"}${pathname}`,
            request.url
        );
        return NextResponse.redirect(url);
    }
}

export function middleware(request) {
    const cookieLocale = request.cookies.get("locale");
    const cookieLocaleIsCorrect = i18n.locales.some(
        (locale) => cookieLocale?.value === locale
    );
    if (cookieLocaleIsCorrect) {
        return routingLocalization(cookieLocale.value, request);
    } else {
        const locale = getLocale(request);
        return routingLocalization(locale, request);
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!redirect|api|_next/static|_next/image|favicon.ico).*)"],
};
