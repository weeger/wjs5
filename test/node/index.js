var http = require('http');
http.createServer(function (req, res) {

  var Wjs = require('../../master/node/wjsServer.js');

  var w = new Wjs();

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n' +
    '<html>\n' +
    '<head>' +
    '<title>Wjs5 nodeJs test</title>' +
    w.renderHeader(4) +
    '</head>' +
    '<body>This is WJS5 test page for nodeJS.</body>' +
    '</html>');
  res.end();
}).listen(8888, '127.0.0.1');

console.log('running...');
