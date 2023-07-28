// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Solana Open Security Standard (SOSS)",
  tagline: "Security standard for Solana programs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://solana-open-security-standard.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/solana-open-security-standard/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CanardMandarin", // Usually your GitHub org/user name.
  projectName: "solana-open-security-standard", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
            "https://github.com/CanardMandarin/solana-open-security-standard/tree/main",
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
      // Replace with your project's social card
      image: "img/banner.jpg",
      navbar: {
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'sidebar',
          //   position: 'left',
          //   label: 'Learn',
          // },
          {
            href: "https://github.com/CanardMandarin/solana-open-security-standard",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: "Links",
            items: [
              {
                label: "Stack Overflow",
                href: "https://solana.stackexchange.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/CanardMandarin/solana-open-security-standard",
              },
              // TODO create a discord and a twitter?
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solana Open Security Standard`,
      },
      prism: {
        additionalLanguages: ["rust", "toml"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
