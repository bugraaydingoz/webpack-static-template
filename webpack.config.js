const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = ['index', 'about', 'contacts']

const entries = {}
pages.forEach(page => (entries[page] = `./src/pages/${page}/index.js`))

const htmlPlugins = pages.map(
  page =>
    new HtmlWebpackPlugin({
      template: `./src/template.html`,
      inject: true,
      chunks: [page],
      filename: `${page}.html`
    })
)

module.exports = {
  entries,
  htmlPlugins
}
