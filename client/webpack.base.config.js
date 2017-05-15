/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const pathLib = require('path')
const { HMR_PORT } = process.env

const config = {
  entry     : [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
  ],
  output    : {
    filename    : 'bundle.js',
    path        : pathLib.resolve(__dirname, '../app/assets/javascripts/webpack/'),
    publicPath  : `http://localhost:${HMR_PORT}/`,
  },
  resolve   : {
    modules     : [__dirname, 'node_modules'],
    alias       : {
      images : 'app/assets/images',
    },
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=1000000',
          'img-loader'
        ]
      }
    ],
  },
}

module.exports = config
