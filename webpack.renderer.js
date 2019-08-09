const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base');

const env = process.env.NODE_ENV || 'production';

const shared = merge(baseConfig, {
  entry: path.resolve(__dirname, 'src', 'renderer', 'index.tsx'),
  target: 'electron-renderer',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
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

const config = env === 'development' ? development : production;

module.exports = config;
