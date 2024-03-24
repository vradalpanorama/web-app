"use client";

import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

import cl from "classnames";

import "./not-found.scss";
import { Icon } from "@/components";
import { useGetLang } from "@/hooks";

export default function NotFound() {
    const lang = useGetLang();
    const headerText = lang === "en" ? "Not Found" : "Ikke Funnet";
    const leadText =
        lang === "en"
            ? "The requested resource could not be found"
            : "Den forespurte ressursen ble ikke funnet";
    const buttonText =
        lang === "en" ? "Back to the main page" : "Tilbake til hovedsiden";

    return (
        <div className={cl("notFound", poppins.className)}>
            <div className="notFoundContainer">
                <h1 className="notFoundTitle">{headerText}</h1>
                <div className="notFound404"></div>

                <p>{leadText}</p>

                <a href="/" className="notFoundLink">
                    <span>{buttonText}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="18"
                        viewBox="0 0 8 12"
                        fill="none"
                        className="notFoundLinkArrow"
                    >
                        <path
                            d="M1.00045 11.2391C1.27665 11.5151 1.72428 11.515 2.00039 11.2389L6.79289 6.44638C7.18342 6.05586 7.18342 5.42269 6.79289 5.03217L2.00039 0.239664C1.72428 -0.0364408 1.27665 -0.036521 1.00045 0.239488C0.724092 0.515647 0.724029 0.963578 1.00031 1.23982L4.79315 5.03212C5.18374 5.42266 5.18374 6.0559 4.79315 6.44643L1.00031 10.2387C0.724029 10.515 0.724092 10.9629 1.00045 11.2391Z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>

            <a href="/" className={"notFoundLogo"}>
                <Icon type={"logo-sun-color"} className={"notFoundLogoSun"} />
                <Icon
                    type={"logo-vradal-panorama"}
                    className={"notFoundLogoVradalPanorama"}
                />
            </a>

            <div className="layer">
                <svg
                    className="layerMountains"
                    width="2391"
                    height="344"
                    viewBox="0 0 2391 344"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1958.61 110.839C1955.69 109.964 1952.52 109.347 1948.81 109.218C1941.35 108.959 1935.78 111.584 1930.25 114.188C1929.96 114.324 1929.67 114.461 1929.38 114.597C1923.91 117.165 1918.38 119.564 1911.01 118.972C1905.53 118.531 1902.54 117.333 1899.69 116.191C1896.5 114.911 1893.49 113.7 1887.32 113.7C1877.29 113.7 1868.09 114.063 1859.23 114.413C1842.47 115.075 1826.94 115.688 1809.33 113.7C1804.39 113.142 1800.42 113.854 1796.77 114.51C1791.9 115.383 1787.58 116.158 1782.24 113.7C1779.04 112.222 1775.82 110.449 1772.59 108.662L1772.59 108.661L1772.59 108.66L1772.58 108.658C1770.41 107.457 1768.23 106.251 1766.02 105.124C1759.46 101.762 1752.74 99.1115 1745.71 99.4536C1738.55 99.802 1737.83 100.339 1735.45 102.109C1734.21 103.034 1732.51 104.296 1729.2 106.044C1720.41 110.697 1715.33 115.292 1711.49 120.14C1709.13 123.118 1707.25 126.191 1705.26 129.432C1701.46 135.622 1697.28 142.425 1688.74 150.343C1679.68 158.745 1658.86 173.24 1635.78 188.442C1642.49 189.007 1648.74 189.718 1654.96 190.425C1668.25 191.937 1681.4 193.432 1698.49 193.447C1731.83 193.476 1753.79 190.507 1781.76 186.725L1781.77 186.724L1781.78 186.722C1790.09 185.599 1798.93 184.404 1808.75 183.194C1817.19 182.155 1824.09 181.01 1830.71 179.912C1840.4 178.304 1849.48 176.796 1861.9 175.871C1878.01 174.671 1889.57 175.027 1902.51 175.426C1909.52 175.642 1916.93 175.871 1925.68 175.871C1938.3 175.871 1948.98 176.107 1959.08 176.33C1977.72 176.741 1994.39 177.109 2017.64 175.871C2038.72 174.749 2054.49 172.593 2070.89 170.353C2083.77 168.592 2097.04 166.779 2113.56 165.374C2119.79 164.845 2125.38 164.328 2130.62 163.843C2147.89 162.246 2161.49 160.99 2182.04 160.736C2207.02 160.428 2227.37 165.684 2246.97 170.748C2272.78 177.414 2297.29 183.746 2329.38 176.603C2332.58 175.891 2335.08 175.137 2337.54 174.398C2340.4 173.537 2343.19 172.696 2346.93 171.965C2360.49 169.32 2379.54 170.196 2390.77 171.078V143.47C2389.84 143.386 2388.93 143.305 2388.03 143.225C2374.01 141.984 2362.42 141.212 2351.33 140.473C2334.56 139.355 2318.93 138.314 2297.79 135.844C2280.83 133.863 2267.05 130.565 2253.85 127.406C2234.56 122.791 2216.51 118.471 2191.58 118.972C2166.89 119.469 2146.42 122.197 2124.98 125.055C2114.03 126.514 2102.83 128.006 2090.69 129.253C2077.04 130.655 2070.03 127.989 2061.86 124.885C2056.15 122.714 2049.88 120.329 2040.38 118.972C2029.47 117.414 2020.7 118.314 2012.03 119.204C2002.7 120.16 1993.47 121.106 1981.82 118.972C1976.01 117.908 1971.53 115.988 1967.19 114.128C1964.38 112.923 1961.63 111.743 1958.61 110.839Z"
                        fill="url(#paint0_linear_1655_13529)"
                    />
                    <path
                        d="M282.33 112.73C256.364 112.734 241.673 114.059 216.093 118.479C202.691 120.795 192.426 124.486 182.349 128.109C170.812 132.257 159.522 136.316 144.054 138.122C115.52 141.453 94.2833 135.485 72.1264 129.258C54.6632 124.351 36.6281 119.282 13.9974 118.479C9.7538 118.329 4.87511 118.258 0 118.236V270.518C7.1705 270.527 14.725 270.426 21.0416 270.096C40.7673 269.065 55.2507 266.209 70.5214 263.198C81.6352 261.006 93.166 258.733 107.438 257.02C157.185 251.052 185.314 249.306 235.389 247.51C253.443 246.863 268.698 248.572 283.218 250.199C306.325 252.787 327.569 255.167 355.268 247.51C371.835 242.932 383.119 236.25 394.807 229.33C404.273 223.726 414.003 217.965 427.016 213.037C463.112 199.371 522.68 188.074 522.68 188.074C522.68 188.074 698.429 118.487 813.858 129.827C835.102 131.914 850.978 136 867.187 140.171C881.366 143.821 895.8 147.536 914.305 150.035C934.243 152.728 949.741 153.322 965.465 153.925C979.746 154.472 994.213 155.027 1012.36 157.167C1052.71 161.927 1082.61 169.424 1113.52 177.176C1138.58 183.459 1164.31 189.91 1196.81 195.207C1216.58 198.428 1232.54 200.344 1248.11 202.172C1256.77 198.447 1265.99 194.92 1277.24 193.447C1298.24 190.698 1314.96 193.165 1331.58 195.618C1348.85 198.167 1366.01 200.699 1387.75 197.353C1391.51 196.773 1394.47 196.119 1397.38 195.476C1400.7 194.743 1403.96 194.024 1408.27 193.447C1424.62 191.255 1436.81 192.931 1449.83 194.721C1458.78 195.952 1468.12 197.236 1479.46 197.353C1505.58 197.621 1525.93 194.964 1546.22 192.315C1566.92 189.613 1587.56 186.919 1614.19 187.344C1622.1 187.47 1629.16 187.884 1635.78 188.442C1658.86 173.24 1679.68 158.745 1688.74 150.343C1697.29 142.425 1701.46 135.622 1705.26 129.431C1707.25 126.19 1709.14 123.117 1711.49 120.14C1702.05 120.958 1693.86 120.264 1685.18 119.528C1677.63 118.888 1669.71 118.216 1660.25 118.479C1646.57 118.861 1634.72 121.964 1623.5 124.903C1604.84 129.79 1587.92 134.223 1567.18 124.947C1560.89 122.134 1556.81 118.228 1552.81 114.398C1548.29 110.072 1543.87 105.841 1536.48 103.388C1528.61 100.775 1522.02 101.957 1515.36 103.152C1509.07 104.281 1502.71 105.422 1495.14 103.388C1487.54 101.345 1482.59 97.6546 1477.56 93.9036C1472.97 90.4871 1468.32 87.0206 1461.54 84.7035C1454.4 82.2613 1448.27 82.2065 1442.22 82.1524C1435.68 82.0938 1429.22 82.036 1421.66 78.9545C1412.07 75.0502 1406.65 69.0451 1401.08 62.8657C1396.31 57.5727 1391.43 52.1518 1383.7 47.8136C1357.03 32.8318 1337.92 31.6441 1307.31 29.8477C1302.93 29.5908 1299.32 29.9098 1295.84 30.2166C1291.01 30.6428 1286.45 31.0455 1280.48 29.8477C1275.9 28.93 1272.7 27.4914 1269.34 25.9805C1266.83 24.8523 1264.23 23.6837 1260.9 22.6614C1240.09 16.2716 1223.77 17.1081 1206.31 18.0031C1194.38 18.615 1181.91 19.2543 1167.1 17.6309C1153.3 16.1173 1142.48 14.053 1131.81 12.0178C1119.95 9.75425 1108.27 7.52669 1092.89 6.13278C1090.75 5.93948 1088.64 5.74715 1086.54 5.55637C1001.05 -2.21709 943.931 -7.41054 865.167 29.8477C861.556 31.5559 858.747 33.4648 856.074 35.2818C851.835 38.1628 847.936 40.8126 841.718 42.0645C838.072 42.7989 835.143 42.4454 832.204 42.0908C829.328 41.7436 826.442 41.3953 822.863 42.0645C813.939 43.733 809 49.0141 803.871 54.4989C799.559 59.1094 795.113 63.8638 788.052 66.7377C783.746 68.4903 780.305 69.2531 776.732 70.0456C773.904 70.6725 770.993 71.318 767.504 72.4867C761.638 74.4519 757.242 76.6307 752.899 78.7838C748.165 81.1305 743.492 83.4466 737.045 85.4222C732.418 86.8399 728.525 87.3417 724.731 87.831C720.126 88.4248 715.666 88.9999 710.211 91.1713C701.028 94.8271 695.832 100.769 690.573 106.783C685.639 112.425 680.649 118.132 672.258 122.073C653.802 130.74 639.154 129.795 621.695 128.669C615.269 128.254 608.462 127.815 600.944 127.822C582.369 127.838 568.135 125.53 553.759 123.199C540.299 121.016 526.714 118.813 509.325 118.479C492.663 118.159 480.188 119.15 467.138 120.187C457.243 120.973 447.017 121.785 434.385 122.073C430.621 122.158 427.092 122.245 423.731 122.329L423.722 122.329L423.718 122.329L423.715 122.329C403.484 122.83 389.333 123.181 366.697 122.073C351.573 121.332 339.58 119.318 327.853 117.349C313.908 115.006 300.339 112.728 282.33 112.73Z"
                        fill="url(#paint1_linear_1655_13529)"
                    />
                    <path
                        d="M282.33 112.73C256.364 112.734 241.673 114.059 216.093 118.479C202.691 120.795 192.426 124.486 182.349 128.109C170.812 132.257 159.522 136.316 144.054 138.122C115.52 141.453 94.2833 135.485 72.1264 129.258C54.6632 124.351 36.6281 119.282 13.9974 118.479C9.7538 118.329 4.87511 118.258 0 118.236V270.518C7.1705 270.527 14.725 270.426 21.0416 270.096C40.7673 269.065 55.2507 266.209 70.5214 263.198C81.6352 261.006 93.166 258.733 107.438 257.02C157.185 251.052 185.314 249.306 235.389 247.51C253.443 246.863 268.698 248.572 283.218 250.199C306.325 252.787 327.569 255.167 355.268 247.51C371.835 242.932 383.119 236.25 394.807 229.33C404.273 223.726 414.003 217.965 427.016 213.037C463.112 199.371 522.68 188.074 522.68 188.074C522.68 188.074 698.429 118.487 813.858 129.827C835.102 131.914 850.978 136 867.187 140.171C881.366 143.821 895.8 147.536 914.305 150.035C934.243 152.728 949.741 153.322 965.465 153.925C979.746 154.472 994.213 155.027 1012.36 157.167C1052.71 161.927 1082.61 169.424 1113.52 177.176C1138.58 183.459 1164.31 189.91 1196.81 195.207C1216.58 198.428 1232.54 200.344 1248.11 202.172C1256.77 198.447 1265.99 194.92 1277.24 193.447C1298.24 190.698 1314.96 193.165 1331.58 195.618C1348.85 198.167 1366.01 200.699 1387.75 197.353C1391.51 196.773 1394.47 196.119 1397.38 195.476C1400.7 194.743 1403.96 194.024 1408.27 193.447C1424.62 191.255 1436.81 192.931 1449.83 194.721C1458.78 195.952 1468.12 197.236 1479.46 197.353C1505.58 197.621 1525.93 194.964 1546.22 192.315C1566.92 189.613 1587.56 186.919 1614.19 187.344C1622.1 187.47 1629.16 187.884 1635.78 188.442C1658.86 173.24 1679.68 158.745 1688.74 150.343C1697.29 142.425 1701.46 135.622 1705.26 129.431C1707.25 126.19 1709.14 123.117 1711.49 120.14C1702.05 120.958 1693.86 120.264 1685.18 119.528C1677.63 118.888 1669.71 118.216 1660.25 118.479C1646.57 118.861 1634.72 121.964 1623.5 124.903C1604.84 129.79 1587.92 134.223 1567.18 124.947C1560.89 122.134 1556.81 118.228 1552.81 114.398C1548.29 110.072 1543.87 105.841 1536.48 103.388C1528.61 100.775 1522.02 101.957 1515.36 103.152C1509.07 104.281 1502.71 105.422 1495.14 103.388C1487.54 101.345 1482.59 97.6546 1477.56 93.9036C1472.97 90.4871 1468.32 87.0206 1461.54 84.7035C1454.4 82.2613 1448.27 82.2065 1442.22 82.1524C1435.68 82.0938 1429.22 82.036 1421.66 78.9545C1412.07 75.0502 1406.65 69.0451 1401.08 62.8657C1396.31 57.5727 1391.43 52.1518 1383.7 47.8136C1357.03 32.8318 1337.92 31.6441 1307.31 29.8477C1302.93 29.5908 1299.32 29.9098 1295.84 30.2166C1291.01 30.6428 1286.45 31.0455 1280.48 29.8477C1275.9 28.93 1272.7 27.4914 1269.34 25.9805C1266.83 24.8523 1264.23 23.6837 1260.9 22.6614C1240.09 16.2716 1223.77 17.1081 1206.31 18.0031C1194.38 18.615 1181.91 19.2543 1167.1 17.6309C1153.3 16.1173 1142.48 14.053 1131.81 12.0178C1119.95 9.75425 1108.27 7.52669 1092.89 6.13278C1090.75 5.93948 1088.64 5.74715 1086.54 5.55637C1001.05 -2.21709 943.931 -7.41054 865.167 29.8477C861.556 31.5559 858.747 33.4648 856.074 35.2818C851.835 38.1628 847.936 40.8126 841.718 42.0645C838.072 42.7989 835.143 42.4454 832.204 42.0908C829.328 41.7436 826.442 41.3953 822.863 42.0645C813.939 43.733 809 49.0141 803.871 54.4989C799.559 59.1094 795.113 63.8638 788.052 66.7377C783.746 68.4903 780.305 69.2531 776.732 70.0456C773.904 70.6725 770.993 71.318 767.504 72.4867C761.638 74.4519 757.242 76.6307 752.899 78.7838C748.165 81.1305 743.492 83.4466 737.045 85.4222C732.418 86.8399 728.525 87.3417 724.731 87.831C720.126 88.4248 715.666 88.9999 710.211 91.1713C701.028 94.8271 695.832 100.769 690.573 106.783C685.639 112.425 680.649 118.132 672.258 122.073C653.802 130.74 639.154 129.795 621.695 128.669C615.269 128.254 608.462 127.815 600.944 127.822C582.369 127.838 568.135 125.53 553.759 123.199C540.299 121.016 526.714 118.813 509.325 118.479C492.663 118.159 480.188 119.15 467.138 120.187C457.243 120.973 447.017 121.785 434.385 122.073C430.621 122.158 427.092 122.245 423.731 122.329L423.722 122.329L423.718 122.329L423.715 122.329C403.484 122.83 389.333 123.181 366.697 122.073C351.573 121.332 339.58 119.318 327.853 117.349C313.908 115.006 300.339 112.728 282.33 112.73Z"
                        fill="url(#paint2_linear_1655_13529)"
                    />
                    <path
                        d="M2336.16 114.168C2330.85 112.655 2326.85 110.621 2322.95 108.641C2318.18 106.218 2313.56 103.876 2306.91 102.669C2298.91 101.218 2293.28 101.64 2286.55 102.145C2283.9 102.343 2281.09 102.554 2277.9 102.669C2270.5 102.937 2264.44 104.113 2258.62 105.242C2250.3 106.857 2242.49 108.373 2231.97 106.981C2225.96 106.185 2221.51 104.427 2217.06 102.667C2212.64 100.918 2208.21 99.167 2202.24 98.3576C2192.39 97.0233 2186.28 97.4663 2177.12 98.1306L2177.12 98.1309L2177.07 98.1343C2176.45 98.1793 2175.82 98.2252 2175.17 98.2717L2174.58 98.3131L2173.95 98.3576C2166.04 98.9112 2159.76 101.005 2153.7 103.026C2145.8 105.659 2138.28 108.167 2128.02 106.981C2122.53 106.346 2118.97 105.302 2114.5 103.991C2113.09 103.576 2111.58 103.134 2109.89 102.669C2105.18 101.372 2101.57 100.063 2097.98 98.7598C2094.27 97.4155 2090.59 96.0772 2085.72 94.7644C2049.48 84.9963 2021.05 93.3876 1991.57 102.091C1980.86 105.25 1970.02 108.451 1958.61 110.839C1961.63 111.743 1964.38 112.922 1967.19 114.128C1971.53 115.987 1976.01 117.908 1981.82 118.972C1993.47 121.106 2002.7 120.16 2012.03 119.203C2020.7 118.313 2029.48 117.414 2040.38 118.972C2049.88 120.329 2056.15 122.713 2061.86 124.884C2070.03 127.988 2077.04 130.655 2090.69 129.253C2102.83 128.006 2114.03 126.514 2124.98 125.055C2146.42 122.197 2166.89 119.469 2191.58 118.972C2216.51 118.471 2234.56 122.791 2253.85 127.405C2267.05 130.565 2280.83 133.862 2297.79 135.844C2318.93 138.314 2334.56 139.355 2351.33 140.473C2362.42 141.212 2374.01 141.984 2388.03 143.225C2388.93 143.305 2389.85 143.386 2390.78 143.469V119.411C2377.47 119.513 2352.97 118.955 2336.16 114.168Z"
                        fill="url(#paint3_linear_1655_13529)"
                    />
                    <path
                        d="M2336.16 114.168C2330.85 112.655 2326.85 110.621 2322.95 108.641C2318.18 106.218 2313.56 103.876 2306.91 102.669C2298.91 101.218 2293.28 101.64 2286.55 102.145C2283.9 102.343 2281.09 102.554 2277.9 102.669C2270.5 102.937 2264.44 104.113 2258.62 105.242C2250.3 106.857 2242.49 108.373 2231.97 106.981C2225.96 106.185 2221.51 104.427 2217.06 102.667C2212.64 100.918 2208.21 99.167 2202.24 98.3576C2192.39 97.0233 2186.28 97.4663 2177.12 98.1306L2177.12 98.1309L2177.07 98.1343C2176.45 98.1793 2175.82 98.2252 2175.17 98.2717L2174.58 98.3131L2173.95 98.3576C2166.04 98.9112 2159.76 101.005 2153.7 103.026C2145.8 105.659 2138.28 108.167 2128.02 106.981C2122.53 106.346 2118.97 105.302 2114.5 103.991C2113.09 103.576 2111.58 103.134 2109.89 102.669C2105.18 101.372 2101.57 100.063 2097.98 98.7598C2094.27 97.4155 2090.59 96.0772 2085.72 94.7644C2049.48 84.9963 2021.05 93.3876 1991.57 102.091C1980.86 105.25 1970.02 108.451 1958.61 110.839C1961.63 111.743 1964.38 112.922 1967.19 114.128C1971.53 115.987 1976.01 117.908 1981.82 118.972C1993.47 121.106 2002.7 120.16 2012.03 119.203C2020.7 118.313 2029.48 117.414 2040.38 118.972C2049.88 120.329 2056.15 122.713 2061.86 124.884C2070.03 127.988 2077.04 130.655 2090.69 129.253C2102.83 128.006 2114.03 126.514 2124.98 125.055C2146.42 122.197 2166.89 119.469 2191.58 118.972C2216.51 118.471 2234.56 122.791 2253.85 127.405C2267.05 130.565 2280.83 133.862 2297.79 135.844C2318.93 138.314 2334.56 139.355 2351.33 140.473C2362.42 141.212 2374.01 141.984 2388.03 143.225C2388.93 143.305 2389.85 143.386 2390.78 143.469V119.411C2377.47 119.513 2352.97 118.955 2336.16 114.168Z"
                        fill="url(#paint4_linear_1655_13529)"
                    />
                    <path
                        d="M1929.38 114.596C1923.3 114.836 1917.01 114.725 1910.46 114.168C1897.6 113.074 1887.66 110.934 1877.79 108.809C1867.38 106.57 1857.05 104.349 1843.49 103.388C1842.65 103.328 1841.81 103.269 1840.98 103.209L1839.13 103.077C1811.11 101.073 1792.51 99.7435 1766.03 105.124C1768.23 106.25 1770.41 107.457 1772.58 108.657L1772.59 108.66L1772.59 108.661L1772.59 108.661C1775.83 110.448 1779.04 112.222 1782.24 113.7C1787.58 116.158 1791.9 115.383 1796.77 114.509C1800.42 113.854 1804.39 113.142 1809.33 113.7C1826.94 115.688 1842.47 115.074 1859.23 114.413C1868.09 114.063 1877.29 113.7 1887.32 113.7C1893.49 113.7 1896.51 114.91 1899.69 116.19C1902.54 117.333 1905.53 118.531 1911.01 118.972C1918.38 119.564 1923.91 117.165 1929.38 114.596Z"
                        fill="url(#paint5_linear_1655_13529)"
                    />
                    <path
                        d="M1929.38 114.596C1923.3 114.836 1917.01 114.725 1910.46 114.168C1897.6 113.074 1887.66 110.934 1877.79 108.809C1867.38 106.57 1857.05 104.349 1843.49 103.388C1842.65 103.328 1841.81 103.269 1840.98 103.209L1839.13 103.077C1811.11 101.073 1792.51 99.7435 1766.03 105.124C1768.23 106.25 1770.41 107.457 1772.58 108.657L1772.59 108.66L1772.59 108.661L1772.59 108.661C1775.83 110.448 1779.04 112.222 1782.24 113.7C1787.58 116.158 1791.9 115.383 1796.77 114.509C1800.42 113.854 1804.39 113.142 1809.33 113.7C1826.94 115.688 1842.47 115.074 1859.23 114.413C1868.09 114.063 1877.29 113.7 1887.32 113.7C1893.49 113.7 1896.51 114.91 1899.69 116.19C1902.54 117.333 1905.53 118.531 1911.01 118.972C1918.38 119.564 1923.91 117.165 1929.38 114.596Z"
                        fill="url(#paint6_linear_1655_13529)"
                    />
                    <path
                        d="M235.389 247.189C185.314 248.984 157.185 250.73 107.438 256.699C93.166 258.411 81.6352 260.685 70.5214 262.876C55.2507 265.888 40.7673 268.744 21.0416 269.775C14.725 270.105 7.1705 270.206 0 270.197V298.152C11.5365 299.261 22.8961 300.131 33.0184 300.535C35.6147 300.639 38.094 300.741 40.4805 300.84C61.149 301.697 74.8595 302.266 97.2939 300.535C111.845 299.412 122.107 297.609 133.632 295.583C139.756 294.507 146.236 293.368 153.906 292.235C164.046 290.737 172.724 287.916 180.931 285.248C196.015 280.344 209.511 275.957 227.575 281.25C232.551 282.708 236.071 284.739 239.605 286.779C243.041 288.762 246.491 290.753 251.308 292.235C264.132 296.18 274.16 294.919 284.956 293.562C292.163 292.656 299.711 291.707 308.661 292.235C321.526 292.994 331.45 294.69 341.384 296.388C351.257 298.075 361.139 299.764 373.925 300.535C410.218 302.723 436.315 298.785 465.117 294.439C481.768 291.927 499.323 289.278 520.276 287.597C531.68 286.682 541.503 284.504 550.789 282.444C568.221 278.577 583.763 275.13 604.328 281.25C608.682 282.546 611.953 284.691 615.082 286.744C619.42 289.59 623.487 292.258 629.791 292.235C636.391 292.212 640.592 289.498 645.176 286.537C648.068 284.669 651.112 282.702 655.007 281.25C658.359 280.001 661.554 278.778 664.634 277.599L664.641 277.596C686.926 269.068 703.141 262.862 728.924 265.627C734.647 266.241 738.845 267.388 743.209 268.581C746.64 269.518 750.174 270.484 754.634 271.241C797.499 278.52 826.144 272.974 863.604 265.721L863.607 265.72L863.614 265.719C872.361 264.025 881.588 262.239 891.59 260.5C918.693 255.79 960.315 245.121 960.315 245.121L1094.06 219.001C1094.06 219.001 1139.63 200.673 1169.21 204.843C1175.14 205.678 1179.57 207.332 1183.98 208.98C1188.51 210.673 1193.03 212.359 1199.12 213.143C1217.12 215.455 1229.93 209.826 1243.53 203.852C1245.04 203.185 1246.57 202.514 1248.11 201.85C1232.54 200.022 1216.58 198.106 1196.81 194.885C1164.31 189.589 1138.58 183.138 1113.52 176.854C1082.61 169.103 1052.71 161.605 1012.36 156.846C994.213 154.705 979.746 154.151 965.465 153.603C949.741 153 934.243 152.406 914.305 149.714C895.8 147.214 881.366 143.499 867.187 139.85C850.978 135.678 835.102 131.592 813.858 129.505C698.429 118.165 522.68 187.753 522.68 187.753C522.68 187.753 463.112 199.05 427.016 212.716C414.003 217.643 404.273 223.404 394.807 229.008C383.119 235.928 371.835 242.61 355.268 247.189C327.569 254.845 306.325 252.465 283.218 249.877C268.698 248.251 253.443 246.542 235.389 247.189Z"
                        fill="url(#paint7_linear_1655_13529)"
                    />
                    <path
                        d="M235.389 247.189C185.314 248.984 157.185 250.73 107.438 256.699C93.166 258.411 81.6352 260.685 70.5214 262.876C55.2507 265.888 40.7673 268.744 21.0416 269.775C14.725 270.105 7.1705 270.206 0 270.197V298.152C11.5365 299.261 22.8961 300.131 33.0184 300.535C35.6147 300.639 38.094 300.741 40.4805 300.84C61.149 301.697 74.8595 302.266 97.2939 300.535C111.845 299.412 122.107 297.609 133.632 295.583C139.756 294.507 146.236 293.368 153.906 292.235C164.046 290.737 172.724 287.916 180.931 285.248C196.015 280.344 209.511 275.957 227.575 281.25C232.551 282.708 236.071 284.739 239.605 286.779C243.041 288.762 246.491 290.753 251.308 292.235C264.132 296.18 274.16 294.919 284.956 293.562C292.163 292.656 299.711 291.707 308.661 292.235C321.526 292.994 331.45 294.69 341.384 296.388C351.257 298.075 361.139 299.764 373.925 300.535C410.218 302.723 436.315 298.785 465.117 294.439C481.768 291.927 499.323 289.278 520.276 287.597C531.68 286.682 541.503 284.504 550.789 282.444C568.221 278.577 583.763 275.13 604.328 281.25C608.682 282.546 611.953 284.691 615.082 286.744C619.42 289.59 623.487 292.258 629.791 292.235C636.391 292.212 640.592 289.498 645.176 286.537C648.068 284.669 651.112 282.702 655.007 281.25C658.359 280.001 661.554 278.778 664.634 277.599L664.641 277.596C686.926 269.068 703.141 262.862 728.924 265.627C734.647 266.241 738.845 267.388 743.209 268.581C746.64 269.518 750.174 270.484 754.634 271.241C797.499 278.52 826.144 272.974 863.604 265.721L863.607 265.72L863.614 265.719C872.361 264.025 881.588 262.239 891.59 260.5C918.693 255.79 960.315 245.121 960.315 245.121L1094.06 219.001C1094.06 219.001 1139.63 200.673 1169.21 204.843C1175.14 205.678 1179.57 207.332 1183.98 208.98C1188.51 210.673 1193.03 212.359 1199.12 213.143C1217.12 215.455 1229.93 209.826 1243.53 203.852C1245.04 203.185 1246.57 202.514 1248.11 201.85C1232.54 200.022 1216.58 198.106 1196.81 194.885C1164.31 189.589 1138.58 183.138 1113.52 176.854C1082.61 169.103 1052.71 161.605 1012.36 156.846C994.213 154.705 979.746 154.151 965.465 153.603C949.741 153 934.243 152.406 914.305 149.714C895.8 147.214 881.366 143.499 867.187 139.85C850.978 135.678 835.102 131.592 813.858 129.505C698.429 118.165 522.68 187.753 522.68 187.753C522.68 187.753 463.112 199.05 427.016 212.716C414.003 217.643 404.273 223.404 394.807 229.008C383.119 235.928 371.835 242.61 355.268 247.189C327.569 254.845 306.325 252.465 283.218 249.877C268.698 248.251 253.443 246.542 235.389 247.189Z"
                        fill="url(#paint8_linear_1655_13529)"
                    />
                    <path
                        d="M1169.21 205.071C1139.63 200.901 1094.06 219.23 1094.06 219.23L960.315 245.35C960.315 245.35 918.693 256.019 891.59 260.729C881.588 262.467 872.361 264.254 863.614 265.948L863.607 265.949L863.604 265.949C826.144 273.203 797.499 278.749 754.634 271.47C750.174 270.713 746.64 269.747 743.209 268.809C738.845 267.617 734.647 266.469 728.924 265.856C703.141 263.091 686.926 269.296 664.641 277.825L664.634 277.828C661.554 279.006 658.359 280.229 655.007 281.479C651.112 282.931 648.068 284.897 645.176 286.765C640.592 289.727 636.391 292.441 629.791 292.464C623.487 292.486 619.42 289.819 615.082 286.973C611.953 284.92 608.682 282.775 604.328 281.479C583.763 275.359 568.221 278.806 550.789 282.673C541.503 284.732 531.68 286.911 520.276 287.826C499.323 289.506 481.768 292.155 465.117 294.668C436.315 299.014 410.218 302.952 373.925 300.764C361.139 299.993 351.257 298.304 341.384 296.616C331.45 294.919 321.526 293.223 308.661 292.464C299.711 291.936 292.163 292.885 284.956 293.791C274.16 295.148 264.132 296.409 251.308 292.464C246.491 290.982 243.041 288.991 239.605 287.008C236.071 284.968 232.551 282.937 227.575 281.479C209.511 276.186 196.015 280.573 180.931 285.477C172.724 288.145 164.046 290.966 153.906 292.464C146.236 293.597 139.756 294.736 133.632 295.812C122.107 297.838 111.845 299.641 97.2939 300.764C74.8595 302.495 61.149 301.926 40.4805 301.069C38.094 300.97 35.6147 300.867 33.0184 300.764C22.8961 300.36 11.5365 299.489 0 298.381V343.972H2390.78V170.985C2379.54 170.103 2360.49 169.227 2346.93 171.872C2343.19 172.603 2340.4 173.444 2337.54 174.305C2335.08 175.044 2332.58 175.798 2329.38 176.51C2297.29 183.653 2272.78 177.321 2246.97 170.654C2227.37 165.591 2207.03 160.335 2182.04 160.643C2161.49 160.896 2147.89 162.153 2130.63 163.75C2125.38 164.235 2119.79 164.752 2113.56 165.281C2097.04 166.686 2083.77 168.499 2070.89 170.26C2054.49 172.5 2038.72 174.656 2017.65 175.778C1994.39 177.016 1977.72 176.648 1959.08 176.237C1948.98 176.014 1938.3 175.778 1925.68 175.778C1916.93 175.778 1909.52 175.549 1902.51 175.333C1889.58 174.934 1878.01 174.578 1861.9 175.778C1849.48 176.703 1840.4 178.211 1830.71 179.819C1824.09 180.917 1817.19 182.062 1808.75 183.101C1798.93 184.311 1790.09 185.505 1781.78 186.629L1781.77 186.631L1781.76 186.632C1753.79 190.414 1731.83 193.383 1698.49 193.354C1681.4 193.339 1668.25 191.844 1654.96 190.332C1648.74 189.625 1642.49 188.913 1635.78 188.349C1629.16 187.792 1622.1 187.377 1614.19 187.251C1587.56 186.826 1566.92 189.52 1546.22 192.222C1525.93 194.872 1505.58 197.528 1479.46 197.26C1468.12 197.143 1458.78 195.859 1449.83 194.629C1436.81 192.839 1424.62 191.162 1408.27 193.354C1403.96 193.932 1400.7 194.65 1397.38 195.383C1394.47 196.026 1391.51 196.68 1387.75 197.26C1366.01 200.606 1348.85 198.074 1331.58 195.526C1314.96 193.072 1298.24 190.605 1277.24 193.354C1265.99 194.827 1256.77 198.354 1248.11 202.079C1246.57 202.743 1245.04 203.414 1243.53 204.08C1229.93 210.054 1217.12 215.684 1199.12 213.371C1193.03 212.588 1188.51 210.902 1183.98 209.209C1179.57 207.561 1175.14 205.907 1169.21 205.071Z"
                        fill="url(#paint9_linear_1655_13529)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1655_13529"
                            x1="1635.78"
                            y1="193.447"
                            x2="2393.22"
                            y2="127.453"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#74C7F8" />
                            <stop offset="1" stopColor="#1FA2EE" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#58BBF5" />
                            <stop offset="0.989583" stopColor="#0B7DBF" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#ADDBF6" />
                            <stop offset="0.989583" stopColor="#1197E4" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#58BBF5" />
                            <stop offset="0.989583" stopColor="#0B7DBF" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#ADDBF6" />
                            <stop offset="0.989583" stopColor="#1197E4" />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#58BBF5" />
                            <stop offset="0.989583" stopColor="#0B7DBF" />
                        </linearGradient>
                        <linearGradient
                            id="paint6_linear_1655_13529"
                            x1="0"
                            y1="0"
                            x2="2394.7"
                            y2="229.641"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#ADDBF6" />
                            <stop offset="0.989583" stopColor="#1197E4" />
                        </linearGradient>
                        <linearGradient
                            id="paint7_linear_1655_13529"
                            x1="1.30848e-05"
                            y1="301.661"
                            x2="1282.91"
                            y2="199.128"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0668A0" />
                            <stop offset="1" stopColor="#1197E4" />
                        </linearGradient>
                        <linearGradient
                            id="paint8_linear_1655_13529"
                            x1="1.30848e-05"
                            y1="301.661"
                            x2="1282.91"
                            y2="199.128"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#58BBF5" />
                            <stop offset="1" stopColor="#1197E4" />
                        </linearGradient>
                        <linearGradient
                            id="paint9_linear_1655_13529"
                            x1="1195.39"
                            y1="160.63"
                            x2="1195.39"
                            y2="343.972"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#28A3EA" />
                            <stop
                                offset="1"
                                stopColor="#0B7DBF"
                                stop-opacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}