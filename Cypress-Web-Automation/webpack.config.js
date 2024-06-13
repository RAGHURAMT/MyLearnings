const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "assert": require.resolve("assert/"),
      "tty": require.resolve("tty-browserify"),
      "constants": require.resolve("constants-browserify"),
      "child_process": false,
      "readline": false,
      "net": false,
      "tls": false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
