import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Awesome NestJS',
  description: 'A curated list of awesome things related to NestJS',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ea2845' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ea2845' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  base: '/',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/777Vasya77/awesome-nestjs/edit/master/content/:path',
      text: 'Edit this page on GitHub'
    },
    logo: '/logo-icon.svg',
    search: {
      provider: 'local',
      options: {
        disableDetailedView: false,
        disableQueryPersistence: false,
      }
    },
    // nav: [
    //   { text: 'Contribute 💚', link: 'https://github.com/sponsors/777Vasya77' }
    // ],
    sidebar: [
      {
        text: 'Resources',
        items: [
          { text: 'Official Resources', link: '/resources/official-resources' },
          { text: 'Community', link: '/resources/community' },
          { text: 'Community-made documentations', link: '/resources/community-made-documentations' },
          { text: 'Talks', link: '/resources/talks' },
          { text: 'Trainings', link: '/resources/trainings' },
          { text: 'Tutorials', link: '/resources/tutorials' },
          { text: 'Examples', link: '/resources/examples' },
          { text: 'Boilerplate', link: '/resources/boilerplate' },
        ]
      },
      {
        text: 'Projects Using NestJS',
        items: [
          { text: 'Open Source', link: '/projects-using-nestjs/open-source' },
        ],
      },
      {
        text: 'Components and Libraries',
        items: [
          { text: 'Utilities', link: '/components-and-libraries/utilities' },
          { text: 'Code Style', link: '/components-and-libraries/code-style' },
          { text: 'Web Sockets', link: '/components-and-libraries/web-sockets' },
          { text: 'Redis', link: '/components-and-libraries/redis' },
          { text: 'Mail', link: '/components-and-libraries/mail' },
          { text: 'API', link: '/components-and-libraries/api' },
          { text: 'Middleware', link: '/components-and-libraries/middleware' },
          { text: 'Errors', link: '/components-and-libraries/errors' },
          { text: 'Lint', link: '/components-and-libraries/lint' },
          { text: 'Router🚦', link: '/components-and-libraries/router' },
          { text: 'Dialogflow', link: '/components-and-libraries/dialogflow' },
          { text: 'Logging', link: '/components-and-libraries/logging' },
          { text: 'Monitoring', link: '/components-and-libraries/monitoring' },
          { text: 'Internationalization', link: '/components-and-libraries/internationalization' },
          { text: 'Currency', link: '/components-and-libraries/currency' },
          { text: 'Event', link: '/components-and-libraries/event' },
          { text: 'Auth', link: '/components-and-libraries/auth' },
          { text: 'Reability', link: '/components-and-libraries/reability' },
          { text: 'RBAC', link: '/components-and-libraries/rbac' },
          { text: 'Multi Tenancy', link: '/components-and-libraries/multi-tenancy' },
          { text: 'Microservice', link: '/components-and-libraries/microservice' },
          { text: 'Database', link: '/components-and-libraries/database' },
        ],
      },
      {
        text: 'Testing',
        items: [
          { text: 'Collections of examples', link: '/testing/collections-of-examples' },
          { text: 'Utilities', link: '/testing/utilities' },
        ],
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Auth', link: '/integrations/auth' },
          { text: 'Databases', link: '/integrations/databases' },
          { text: 'GraphQL', link: '/integrations/graphql' },
          { text: 'Pattern', link: '/integrations/pattern' },
          { text: 'Editors', link: '/integrations/editors' },
          { text: 'AMQP', link: '/integrations/amqp' },
          { text: 'EventStore', link: '/integrations/eventstore' },
          { text: 'Payment Gateways', link: '/integrations/payment-gateways' },
          { text: 'Frontend', link: '/integrations/frontend' },
          { text: 'Scheduling', link: '/integrations/scheduling' },
          { text: 'Workflow Automation', link: '/integrations/workflow-automation' },
          { text: 'Chatbots', link: '/integrations/chatbots' },
          { text: 'File Storage', link: '/integrations/file-storage' },
          { text: 'Cloud Managed Configuration', link: '/integrations/cloud-managed-configuration' },
          { text: 'SDK', link: '/integrations/sdk' },
        ],
      },
      {
        text: 'Runtime',
        items: [
          { text: 'Command Line / Terminal', link: '/runtime/command-line-terminal' },
        ],
      },
      {
        text: 'Meetups',
        items: [
          { text: 'Meetups', link: '/meetups/meetups' },
        ],
      },
      {
        text: 'License',
        items: [
          { text: 'License', link: '/license/license.html' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nestjs/awesome-nestjs' }
    ],
    footer: {
      message: 'Maintained by Vasya Ponomarenko',
    },
  },
});
