var http = require('http');
function process_request(req, res) {
    var body = '<h1>Hello World! Thanks for calling!\n</h1>';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/html'
    });
	res.write(body);
    res.end();
}
var s = http.createServer(process_request);
s.listen(1337, 'localhost');

console.log('Server running at http://127.0.0.1:1337/');






