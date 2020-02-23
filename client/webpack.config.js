const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename:"main.js"
  },
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
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      favicon: path.join(__dirname, 'src/favicon.ico'),
    }),
  ]
}

module.exports = config;