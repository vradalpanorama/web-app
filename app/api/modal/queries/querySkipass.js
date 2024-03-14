function querySkipass() {
    const skipassTextEN = {
        iconType: "skipass",
        title: ["Book your", "skipass online"],
        lead: ["Buy your lift tickets online", "and go straight to the lifts!"],
        content: {
            type: "list", // accordion, switcher, list
            contentItems: [
                {
                    iconType: "skipass-feature-1",
                    title: "Find your skipass!",
                    lead: "Create your account the first time you purchase your lift ticket!",
                },
                {
                    iconType: "skipass-feature-2",
                    title: "Buy new or recharge",
                    lead: "Register your Keycards and the personal information of the people heading for the slopes",
                },
                {
                    iconType: "skipass-feature-3",
                    title: "The online ticket",
                    lead: "Next time you go skiing, reload your lift ticket and no more hassle buying tickets or waiting in line!",
                },
            ],
        },
        action: {
            type: "new-tab", // app-page, close-btn
            content: {
                href: "https://vraadal.skiperformance.com/en/",
                button: "Booking Skipass",
                description: ["On skiperformance.com", "The platform for booking ski passes"],
            },
        },
    };

    const skipassTextNO = {
        iconType: "skipass",
        title: ["Bestill ditt", "heiskort online"],
        lead: ["Kjøp heiskort online", "og gå rett til heisene!"],
        content: {
            type: "list", // accordion, switcher, list
            contentItems: [
                {
                    iconType: "skipass-feature-1",
                    title: "Finn ditt heiskort!",
                    lead: "Opprett konto første gang du kjøper heiskort!",
                },
                {
                    iconType: "skipass-feature-2",
                    title: "Kjøp nytt eller lad opp",
                    lead: "Registrer Nøkkelkortene dine og den personlige informasjonen til personene som er på vei mot bakkene",
                },
                {
                    iconType: "skipass-feature-3",
                    title: "Den elektroniske billetten",
                    lead: "Neste gang du går på ski, last inn heiskortet på nytt og ikke mer problemer med å kjøpe billetter eller vente i kø!",
                },
            ],
        },
        action: {
            type: "new-tab", // app-page, close-btn
            content: {
                href: "https://vraadal.skiperformance.com/no/",
                button: "Bestilling Av Skipass",
                description: ["På skiperformance.com", "Plattformen for bestilling av skipass"],
            },
        },
    };

    const skipassTextResponse = {
        en: skipassTextEN,
        no: skipassTextNO,
    };
    return skipassTextResponse;
}

export default querySkipass;
