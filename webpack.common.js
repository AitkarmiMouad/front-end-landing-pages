const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { NONAME } = require("dns");

module.exports = {
  entry: "./src/scripts/main.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
    ]
  },
  devtool: false,
};
