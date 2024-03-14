import { Poppins } from "next/font/google";

import "@/styles/reset.scss";
import "@/styles/global.scss";
import favicon from "@/app/favicon.svg";

import NextTopLoader from "nextjs-toploader";

import { apiFetch } from "@/helpers/sanity/apiFetch";
import { Header, Modal, PageContent, Footer } from "@/components";
import { siteSettings } from "@/helpers/sanity/groqQueries";
import { getDictionaries } from "@/helpers/i18n/get-dictionary";

export const metadata = {
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export default async function RootLayoutNO({ children }) {
    const response = await apiFetch({
        groq: siteSettings,
    });
    const dictionaries = await getDictionaries();
    const menuSettings = response["result"]["siteSettings"]["menuSettings"];
    const footerSettings = response["result"]["siteSettings"]["footerSettings"];

    return (
        <html className={poppins.className}>
            <head>
                <link rel="icon" href={favicon.src} type="image/x-icon" />
                <meta name="theme-color" content="#197EBD" />
            </head>
            <body>
                <NextTopLoader
                    showSpinner={false}
                    color="#34a9ed"
                    shadow="0 0 10px #34a9ed,0 0 5px #34a9ed"
                    height={4}
                />
                {/* <Modal /> */}
                <Header menuSettings={menuSettings} />
                <PageContent dictionaries={dictionaries}>
                {children}
                </PageContent>
                <Footer footerSettings={footerSettings} />
            </body>
        </html>
    );
}
