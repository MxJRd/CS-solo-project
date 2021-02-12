const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './client/src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        //add query and presets if babelrc doesn't work
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
  // devServer: {
  //   allowedHosts: [
  //     '127.0.0.1'
  //   ],
  //   host: '127.0.0.1',
  //   port: 8080,
  //   contentBase: path.resolve(__dirname, 'client/src'),
  //   publicPath: '/',
  //   historyApiFallback: true,
  //   proxy: {
  //     '/': 'http://localhost:3000'
  //   },
  //   hot: true,
  // }
}