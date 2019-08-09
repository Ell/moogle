const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const env = process.env.NODE_ENV || 'dev';

const shared = merge(baseConfig, {
  entry: path.join(__dirname, 'src', 'main', 'index.ts'),
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});

const development = merge(shared, {
});

const production = merge(shared, {
  mode: 'production',
});

const config = env === 'development' ? development : production;

module.exports = config;
