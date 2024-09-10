const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require('path');

// module.exports = merge(common, {
//   mode: "development",
//   devtool: "inline-source-map",
//   devServer: {
//     static: "./dist", // Use 'static' instead of 'contentBase'
//     port: 3000, // Set a port if you want (default: 8080)
//     open: true, // Automatically open browser
//     hot: true, // Enable hot module replacement
//   },
// })

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public'
    },
    port: 3000, // Ensure it's running on the correct port
    open: true,
    hot: true,
  },
});