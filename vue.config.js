module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: true,
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: '渠道人员综合支撑平台',
    },
  },
};
