// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Coinpediaxyz",
  tagline: "Learn basic how to build web3 dapp",
  url: "https://coinpedia.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-blue.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nugiexpres", // Usually your GitHub org/user name.
  projectName: "Build web3 dapp to buy cheapest crypto coin", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/nugiexpres",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/nugiexpres",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: "TK013U555M",
      //   apiKey: "868e35b771ee2f9116e289cf1ba63d96",
      //   indexName: "-coinpedia",
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Buy crypto with low budget",
          src: "img/fw3-blue-logo-squared.png",
        },
        items: [
          {
            type: "doc",
            docId: "roadmap/introduction",
            position: "left",
            label: "Resources",
          },
          {
            href: "https://github.com/nugiexpres",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/roadmap/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/nugrosir",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/nugiexpres",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By Francesco Ciulla, 4C Founder`,
      },

      announcementBar: {
        id: "Join us",
        content:
          'Lets build web3 dapp for buy crypto with low budget <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nugiexpres">Join the Community</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
