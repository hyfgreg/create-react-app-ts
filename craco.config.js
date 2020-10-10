const { whenProd } = require("@craco/craco");

const CompressionPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require("craco-less");

const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  devServer: {
    // host: '0.0.0.0',
    port: 8000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    quiet: true, // 关闭提示
  },
  webpack: {
    alias: {
      '@': pathResolve('./')
    },
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