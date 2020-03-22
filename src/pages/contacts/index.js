require('normalize.css/normalize.css')
require('./style.css')
const template = require('./index.hbs')

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content')
  content.innerHTML = template({
    person: { name: 'John' }
  })
})
