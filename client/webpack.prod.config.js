/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const pathLib = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const config = require('./webpack.base.config.js')

config.entry.push(
  './app/bundles/officialSite/startup/registration',
  './app/assets/styles/home/index.scss'
)

config.devtool = false

config.plugins.push(
  new webpack.EnvironmentPlugin({ 
    NODE_ENV: 'production',
    HOT: false,
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8,
  })
)

module.exports = config

console.log('\x1b[32m%s\x1b[0m', 'Webpack production build for Rails');  // eslint-disable-line no-console
