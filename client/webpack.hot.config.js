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
  './app/bundles/officialSite/startup/registrationHot',
  './app/assets/styles/home/index.scss'
)

config.devtool = 'eval-source-map'
config.devServer = {
  headers   : {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET",
  },
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

console.log('\x1b[32m%s\x1b[0m', 'Webpack HOT dev build for Rails');  // eslint-disable-line no-console
