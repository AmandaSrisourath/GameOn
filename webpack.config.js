const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/modal.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};