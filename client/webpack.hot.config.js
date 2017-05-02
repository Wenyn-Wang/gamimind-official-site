/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const pathLib = require('path')
const config = require('./webpack.base.config.js')
const { HMR_PORT } = process.env

config.entry.push(
  `webpack-dev-server/client?http://localhost:${HMR_PORT}`,
  'react-hot-loader/patch',
  './app/bundles/OfficialSite/startup/registrationHot',
  './app/assets/styles/OfficialSite/index.scss'
)

config.devtool = 'eval-source-map'
config.devServer = {
  port: HMR_PORT,
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
