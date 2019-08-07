const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base');

const env = process.env.NODE_ENV || 'dev';

const shared = merge(baseConfig, {
  entry: path.resolve(__dirname, 'src', 'renderer', 'index.tsx'),
  target: 'electron-renderer',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Moogle',
    }),
  ],
});

const development = merge(shared, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader', 'react-hot-loader/webpack'],
        enforce: 'pre',
      },
    ],
  },
});

const production = merge(shared, {
  mode: 'production',
});

const config = env === 'dev' ? development : production;

module.exports = config;
