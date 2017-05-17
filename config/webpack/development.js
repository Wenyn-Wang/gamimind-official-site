// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig, {
  devtool: 'sourcemap',

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  }
})

console.log('\x1b[32m%s\x1b[0m', 'Webpack dev build for Rails')  // eslint-disable-line no-console
