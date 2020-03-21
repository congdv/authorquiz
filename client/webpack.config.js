const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = {
  entry: ["@babel/polyfill",path.join(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename:"[name].js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        use:['babel-loader']
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
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    // proxy: {
    //   '/': 'http://localhost:3001'
    // },
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      favicon: path.join(__dirname, 'src/favicon.ico'),
    }),

    // new CopyWebpackPlugin([
    //   {from: path.join(__dirname, '/public'), to:'./'}
    // ]),
    
  ]
}

module.exports = config;