/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const pathLib = require('path')
const config = require('./webpack.base.config.js')

config.entry.push(
  './app/bundles/OfficialSite/startup/registration',
  './app/assets/styles/OfficialSite/index.scss'
)

config.devtool = 'eval-source-map'

config.plugins.push(
  new webpack.EnvironmentPlugin({ 
    NODE_ENV: 'development',
    HOT: false,
  })
)

module.exports = config

console.log('Webpack dev build for Rails') // eslint-disable-line no-console
