"use strict"
var webpack = require('webpack')

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: "./public"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.html$/, loader: "html-loader?minimize=false" }
    ]
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
