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
      title: '红黄牌实时查询',
    },
  },
};
