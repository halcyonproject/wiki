const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Halcyon Wiki',
  tagline: 'Welcome to the Halcyon Wiki!',
  favicon: 'img/favicon.ico',
  url: 'https://wiki.hlcyn.me',
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Halcyon Wiki',
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
                label: 'Apply Maintainership',
                to: '/docs/apply',
              },
              {
                label: 'Code of Conduct',
                to: '/docs/maintainers-coc'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram (Channel)',
                href: 'https://t.me/hlcynprjct',
              },
              {
                label: 'Telegram (Chat)',
                href: 'https://t.me/hlcynprjctchat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/halcyonproject'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hlcynprjct',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Halcyon Project.<br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0.</a></span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
