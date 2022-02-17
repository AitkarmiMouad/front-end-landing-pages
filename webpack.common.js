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
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  devtool:false,
};
