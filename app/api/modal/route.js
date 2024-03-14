import { NextResponse } from "next/server";
import { querySkipass } from "./queries";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    switch (query) {
        case "skipass":
            return NextResponse.json(querySkipass());
        default:
            return NextResponse.json(
                {
                    error: {
                        en: {
                            title: ["Server Error"],
                            content: [
                                "Ooops, something went wrong",
                                "Please try again.",
                            ],
                            action: {
                                type: "refresh",
                                content: {
                                    href: null,
                                    button: "Refresh",
                                    description: [
                                        "or feel free to contact us alpin@alpin.no",
                                        "if the problem persists",
                                    ],
                                },
                            },
                        },
                        no: {
                            title: ["Server Error"],
                            content: [
                                "Ooops, noe gikk galt",
                                "Vennligst prøv igjen.",
                            ],
                            action: {
                                type: "refresh",
                                content: {
                                    href: null,
                                    button: "Oppdatere",
                                    description: [
                                        "Eller kontakt oss gjerne alpin@alpin.no",
                                        "Hvis problemet vedvarer",
                                    ],
                                },
                            },
                        },
                    },
                },
                {
                    status: 500,
                }
            );
    }
}
