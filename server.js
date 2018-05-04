const next = require('next')
const routes = require('./routes')
const { parse } = require('url')
const { createReadStream } = require('fs')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const { createServer } = require('http')
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl

    if (pathname === '/manifest.json' || pathname === '/manifest2.json' || pathname === '/sw.js' || pathname === '/OneSignalSDKWorker.js' || pathname === '/OneSignalSDKUpdaterWorker.js') {
      res.setHeader('content-type', 'text/javascript')
      createReadStream(`./static${pathname}`).pipe(res)
    } else {
      handler(req, res, parsedUrl)
    }
  }).listen(process.env.PORT || 3000)
})
