import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Nice Note',
  themeConfig: {
    title: 'Nice Note',
    navs: [
      null,
      {
        title: 'GitHub',
        path: 'git@github.com:j710328466/learn-note.git',
      },
    ]
  },
  logo: 'https://i.niupic.com/images/2021/06/07/9krN.png',
  favicons: ['https://i.niupic.com/images/2021/06/07/9krN.png'],
  outputPath: 'docs-dist',
  exportStatic: {},
  hash: true,
  publicPath: '/',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'passive',
  },
  scripts: [
    {
      src: 'https://umami.jiangzhixiong.com/script.js',
      'data-website-id': '8b5e3f5f-0922-43d3-9e20-b5b3b87a1f9e'
    }
  ],
  locales: [{ id: 'zh-CN', name: '中文' }], // 2.0 默认值
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: false,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  sitemap: {
    hostname: 'https://j710328466.github.io'
  },
  copy: [
    { from: 'public', to: 'docs-dist' }
  ]
});