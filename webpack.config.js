const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
devtool: 'source-map',
entry: [
    path.resolve(__dirname, './src/index.js')
    ],
target: 'web',
output: {
    path: path.resolve(__dirname, './dist'),
publicPath: '/',
filename: 'bundle.js'
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
inject: true
})
],
module: {
rules : [
{
test: /\.js$/,
exclude: /node_modules/,
use: ['babel-loader'],
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader'],
},
{
test: /\.s[ac]ss$/i,
use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",

      'sass-loader',
      {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
      },
      // Compiles Sass to CSS
      
    ],
  },
]
}
}