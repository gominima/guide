import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // site config
  lang: "en-US",
  title: "Minima",
  description: "The official guide for minima",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/gominima/website/main/public/favicon.ico",
      },
    ],
    ["meta", { property: "og:title", content: "Minima" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "The official guide for Minima framework",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://guide.gominima.studio/" }],
    ["meta", { property: "og:locale", content: "en_US" }],
  ],
  bundler: "@vuepress/bundler-vite",
  // options for vite bundler
  bundlerConfig: {
    viteOptions: {
      server: process.env.DOCKER
        ? {
            hmr: {
              port: 443,
            },
          }
        : {},
    },
  },
  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            '/introduction/getting-started.md',
            '/introduction/requesting-more-content.md',
            '/introduction/whats-new.md',
          ],
        },
        {
          text: 'Installations & Preparations',
          children: [
            '/preparations/',
            '/preparations/setting-up-a-formatter.md',
          ],
        },
        {
          text: 'Creating a server',
          children: [
            '/creating-a-server/',
            '/creating-a-server/route-handling.md',
            '/creating-a-server/using-a-logger.md'
          ]
        },
        {
          text: 'Popular Topics',
          children: [
            '/popular-topics/cors.md'
          ]
        }
      ]
    },
    sidebarDepth: 3,
    navbar: [
			{
				text: 'Documentation',
				link: 'https://gominima.studio',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/gominima/minima',
			},
		],
  }
});
