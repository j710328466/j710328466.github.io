import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'NiceNote',
  favicon: 'https://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.ico',
  logo: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  hash: true,
  dynamicImport: {},
  history: {
    type: 'hash',
  },
  mode: 'site',
  publicPath: '/niceNote/',
  resolve: {
    includes: [
      'docs',
      'src'
    ],
  },
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    // {
    //   title: '其它',
    //   children: [
    //     { title: '爬虫', path: '/spider' },
    //   ],
    // },
    {
      title: 'GitHub',
      path: 'git@github.com:j710328466/learn-note.git',
    },
  ],
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: false,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  }
});
