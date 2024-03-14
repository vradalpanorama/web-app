import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const email = await body["email"];

    const projectId = "w2ekklgv";
    const datasetName = "production";
    try {
        
        const mutations = [
            {
                createOrReplace: {
                    _type: "email-subscription",
                    email: email,
                },
            },
        ];

        const response = await fetch(
            `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`,
            {
                method: "POST",
                body: JSON.stringify({mutations}),
                headers: {
                    Authorization: `Bearer ${process.env.EMAIL_SUBSCRIPTION}`,
                    "Content-type": "application/json",
                },
            }
        );
        const responseData = await response.json();
        console.log(responseData);
    } catch (err) {
        console.log(err);
    }

    return NextResponse.json({ message: "You have subscribed" });
}
