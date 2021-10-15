require('http').createServer(function(req, res) {
  res.writeHead(301, {'Location': 'https://leancloud.cn'})
  res.end()
}).listen(3000)
