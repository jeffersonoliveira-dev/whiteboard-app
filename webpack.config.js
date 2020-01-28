module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_m̀odules/,
        use: {
          loader: "babel-loader",
          options: {
          presets: ['@babel/preset-env', "@babel/preset-react"]
        }
        }
      }
    ]
  }
}
