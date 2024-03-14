export default function useScrollOnTop() {
    if (typeof window === "undefined") return {};

    const scrollOnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return scrollOnTop;
}
