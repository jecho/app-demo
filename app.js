var express = require('express');

var app = express();
const port = 80;

app.use('/', express.static('.'));

app.get('/health', function (req, res) {
	res.send('Hello World!, Yes this is an easteregg you persistent fool!');
});

app.listen(port, function () {
	console.log('Example app listening on port ' + process.env.EXPOSE_PORT + '!');
});
