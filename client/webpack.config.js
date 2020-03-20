const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, "dev"),
    filename:"[name].js",
    publicPath: '/',
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
      {
        test: /\.(jpe?g|png|gif|woff2?|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]'
            },
          },
        ],
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dev"),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      favicon: path.join(__dirname, 'src/favicon.ico'),
    }),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, '/public'), to:'./'}
    ]),
  ]
}

module.exports = config;