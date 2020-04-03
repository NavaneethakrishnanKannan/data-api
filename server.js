const app = require('./app');
const http = require('http');
const home = require("./routes/home");
// eslint-disable-next-line no-undef
const port = process.env.PORT || process.argv[2];
const server = http.createServer();

server.listen(port, () => {
	console.log(server.address().address + ':' + server.address().port);
});

server.on('request', app);
app.use('/api/v1/home', home);