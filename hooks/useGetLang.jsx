import { usePathname } from "next/navigation";

export default function useGetLang() {
    const pathname = usePathname();
    const lang = pathname.split("/")[1] === "en" ? "en" : "no";

    return lang;
}
