const path = require("path");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename:"main.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test:/\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env","@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}

module.exports = config;