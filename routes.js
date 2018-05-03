const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('about', '/about')
.add('nekko', '/nekko/:id')
