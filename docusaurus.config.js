// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hlcyn wiki.',
  tagline: 'Simple yet unique Android distribution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.hlcyn.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'halcyonproject', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'hlcyn wiki.',
        logo: {
          alt: 'Halcyon Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://hlcyn.me',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Lorem',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Lorem',
            items: [
              {
                label: 'Lorem',
                href: 'Lorem',
              },
              {
                label: 'Lorem',
                href: 'Lorem',
              },
              {
                label: 'Lorem',
                href: 'Lorem',
              },
            ],
          },
          {
            title: 'Lorem',
            items: [
              {
                label: 'Lorem',
                to: '/Lorem',
              },
              {
                label: 'Lorem',
                href: 'Lorem',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Halcyon Project.<br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0.</a></span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'wip',
        content:
          '🍭 Halcyon wiki is work in progress. You can help us at <a href="https://github.com/halcyonproject/wiki/">here.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

module.exports = config;
