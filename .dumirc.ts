import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'nicenote',
    navs: [
      null,
      {
        title: 'GitHub',
        path: 'git@github.com:j710328466/learn-note.git',
      },
    ]
  },
  favicons: ['https://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.ico'],
  // logo: 'http://jzx-h5.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  hash: true,
  history: {
    type: 'hash',
  },
  publicPath: '/',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'passive',
  },
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
  }
});
