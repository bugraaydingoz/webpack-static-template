const path = require('path')
const { entries, htmlPlugins } = require('./webpack.config')

module.exports = {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  entry: entries,

  devServer: {
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },

      {
        test: /\.hbs$/i,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [path.join(__dirname, 'src/components')]
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [...htmlPlugins]
}
