export default async function fetchFnuggData() {
    try {
        const res = await fetch("https://api.fnugg.no/get/resort/114", {
            next: { revalidate: 300 } 
        });
        const fnuggData = await res.json();

        // console.log(fnuggData);
        return fnuggData;
    } catch (err) {
        return {
            error: err,
        };
    }
}


