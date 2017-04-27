/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const pathLib = require('path')
const config = require('./webpack.base.config.js')

config.entry.push(
  'webpack-dev-server/client?http://localhost:3500',
  'react-hot-loader/patch',
  './app/bundles/OfficialSite/startup/registration',
  './app/assets/styles/OfficialSite/index.scss'
)

config.devtool = 'eval-source-map'
config.devServer = {
  port: 3500,
  hot: true,
  stats: {
    hash: false,
    version: false,
    chunks: false
  }
}

config.plugins.push(
  new webpack.EnvironmentPlugin({ 
    NODE_ENV: 'development',
    HOT: true,
  }),
  new webpack.HotModuleReplacementPlugin() 
)

module.exports = config

console.log('Webpack HOT dev build for Rails') // eslint-disable-line no-console
