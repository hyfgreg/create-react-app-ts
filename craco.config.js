const { whenProd } = require("@craco/craco");

const CompressionPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require("craco-less");


module.exports = {
  devServer: {
    // host: '0.0.0.0',
    port: 8090,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    quiet: true, // 关闭提示
    proxy:{
      '/api': {
        target: 'http://192.168.88.241:9500',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  webpack: {
    plugins: [
      ...whenProd(() => [
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
          threshold: 10240,
          minRatio: 0.8,
        })], []),
    ],
  },
  plugins: [
    { plugin: CracoLessPlugin },
  ]
}