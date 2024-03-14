import "@/styles/reset.scss";
import "@/styles/global.scss";

import cl from "classnames";

import { Header, Modal, PageContent, Footer } from "@/components";

import { getDictionary, getDictionaries } from "@/helpers/i18n/get-dictionary";
import { i18n } from "@/helpers/i18n/i18n-config";

import style from "./layout.module.scss";

import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
    title: "Vrådal Panorama",
    description: "Skicenter",
};

export default async function RootLayout({ children, params }) {
    const lang = params.lang;
    const dictionaryRaw = await getDictionary(lang);
    const dictionary = JSON.parse(JSON.stringify(dictionaryRaw));
    const dictionaries = await getDictionaries();

    return (
        <html lang={lang}>
            <head></head>
            <body className={poppins.className} style={{ overflow: "hidden" }}>
                <NextTopLoader
                    showSpinner={false}
                    color="#34a9ed"
                    shadow="0 0 10px #34a9ed,0 0 5px #34a9ed"
                    height={4}
                />
                <Header />
                <PageContent dictionaries={dictionaries}>
                    <Modal />
                    {children}
                    <Footer />
                </PageContent>
            </body>
        </html>
    );
}
