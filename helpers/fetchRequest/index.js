export async function fetchRequest(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}
