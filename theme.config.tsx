import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    logo: <img style={{ width: "100px" }} src="/awe.png" />,
    project: {
        link: "https://github.com/runthefun",
    },
    chat: {
        link: "https://discord.gg/oncyber",
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
        forcedTheme: "light",
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – AWE",
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
