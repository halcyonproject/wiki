import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Halcyon Wiki',
  tagline: 'Welcome to the Halcyon Wiki!',
  favicon: 'img/favicon.ico',
  url: 'https://wiki.hlcyn.co',
  baseUrl: '/',
  organizationName: 'halcyonproject',
  projectName: 'wiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'Halcyon Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: "https://github.com/halcyonproject",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://twitter.com/hlcynprjct",
            position: "right",
            className: "header-x-link",
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Apply",
            position: "left",
            to: "/development/maintainership/device-req",
          },
          {
            label: "Community",
            position: "left",
            items: [
              {
                label: "Telegram (Channel)",
                to: "https://t.me/hlcynprjct",
              },
              {
                label: "Telegram (Chat)",
                to: "https://t.me/hlcynprjctchat",
              },
            ],
          },
          {
            label: "Code of Conduct",
            position: "left",
            to: "/development/maintainership/coc",
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Halcyon Project.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
