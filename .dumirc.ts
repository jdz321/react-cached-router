import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  outputPath: 'docs-dist',
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'react-cached-router',
  },
  base: '/react-cached-router/',
  publicPath: '/react-cached-router/',
});
