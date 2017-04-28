/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const pathLib = require('path')

const config = {
  entry     : [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
  ],
  output    : {
    filename    : 'webpack-bundle.js',
    path        : pathLib.resolve(__dirname, '../app/assets/javascripts/webpack/'),
  },
  resolve   : {
    extensions  : ['.js', '.jsx'],
  },
  plugins   : [],
  module    : {
    rules       : [
      {
        test    : require.resolve('react'),
        use     : {
          loader    : 'imports-loader',
          options   : {
            shim  : 'es5-shim/es5-shim',
            sham  : 'es5-shim/es5-sham',
          }
        },
      },
      {
        test    : /\.jsx?$/,
        use     : 'babel-loader',
        exclude : /node_modules/,
      },
      {
        test    : /\.(scss|css)$/,
        use     : [ 
          'style-loader',
          'css-loader',
          {
            loader  : 'postcss-loader',
            options : {
              plugins : 'autoprefixer',
            }
          }, 'sass-loader?sourceMap' ]
      }
    ],
  },
}

module.exports = config
