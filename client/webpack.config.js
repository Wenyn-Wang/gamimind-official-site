/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');
const pathLib = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const options = {
  entry: devBuild ? [
    "webpack-dev-server/client?http://localhost:3500",
    "react-hot-loader/patch",
  ] : [],
  devtool : devBuild ? 'eval-source-map' : false,
  devServer : devBuild ? {
    port: 3500,
    hot: true,
    stats: {
      hash: false,
      version: false,
      chunks: false
    }
  } : false,
  plugins : devBuild ? [  new webpack.HotModuleReplacementPlugin() ] : [],
}

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    ...options.entry,
    './app/bundles/OfficialSite/startup/registration',
    './app/assets/styles/OfficialSite/index.scss',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: pathLib.resolve(__dirname, '../app/assets/javascripts/webpack/'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool : options.devtool,
  devServer : options.devServer,

  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    ...options.plugins,
  ],
  
  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [ 
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: 'autoprefixer',
            }
          }, 'sass-loader?sourceMap' ]
      }
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}