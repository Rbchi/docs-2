module.exports = {
  title: 'Welcome to CKB Docs',
  tagline: 'This it docs for CKB developers',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nervoscommunity', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CKB Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/docs/doc1', label: '文档', position: 'left'},
        {to: 'blog', label: '博客', position: 'left'},
        {to: 'docs/rfcs/introduction',label:'RFCs',position:'left'},
        {to: 'docs/qa/welcome',label:'常见问题',position:'left'},
        {
          href: 'https://ckb.dev',
          label: '论坛',
          position: 'left',
        },
        {
          href: 'https://github.com/nervoscommunity/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开发文档',
              to: 'docs/docs/doc1',
            },
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'RFCs',
              to: 'docs/rfcs/introduction',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '论坛',
              href: 'https://ckb.dev',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: '社交',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/love_nervos',
            },
            {
              label: '微博',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Community. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nervoscommunity/docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
