/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ["ru", "en", "uz"],
        defaultLocale: "ru",
    },
    images: {
        domains: ["panel.quadro.uz"],
    },
    env: {
        BASE_URL: "https://panel.quadro.uz/v1/api",
        TOKEN:
        "1bGK7g7ZWirUtnJgdjotBta2kwJFT7CoiQ8xorfTBmDJ8T-BLUoCfIYv0u1GIquQAKJp69Ke9ymD2i9fc8wCIbP",
        REACT_APP_YMAPS_KEY: "62775787-95ba-404a-aedd-cfba5fbfbf54",
    },
};

module.exports = nextConfig;
