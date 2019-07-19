module.exports = {
  title: 'QMK Firmware Documentation',
  description: 'Quantum Mechanical Keyboard Firmware Documentation.',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Suggest an improvement to this page!',
    lastUpdated: 'Last Updated',
    logo: '/favicon.png',
    repo: 'qmk/qmk_api',
    repoLabel: 'Fork',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chat', link: 'https://discord.gg/V5Trhu2' },
    ],
    sidebar: [
      'newbs',
      '/',
      'faq',
      'detailed_guides',
      'reference',
      'features',
      'makers_modders',
      'deeper_understanding',
      'other_topics',
      'qmk_internals'
    ]
  },
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'QMK鍵盤固件',
      description: 'QMK鍵盤固件'
    }
  }
}
