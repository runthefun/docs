import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    logo: <img style={{ width: "100px" }} src="/logo.png" />,
    project: {
        link: "https://github.com/oncyberio",
    },
    chat: {
        link: "https://discord.gg/NCuAWD4FCz",
    },
    // docsRepositoryBase: "https://v2.oncyber.io",
    head: () => (
        <>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </>
    ),
    primaryHue: 215,
    primarySaturation: 20,
    darkMode: false,
    nextThemes: {
        defaultTheme: "light",
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – V2.ONCYBER",
            };
        }
    },
    navigation: false,
    gitTimestamp: false,
    sidebar: {
        defaultMenuCollapseLevel: 1,
    },
    footer: {
        text: <div></div>,
    },
};

export default config;
