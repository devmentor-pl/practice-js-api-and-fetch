// import corsAnywhere from 'cors-anywhere';

const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

cors_proxy
	.createServer({
		originWhitelist: [], // zezwól na wszystkie domeny
	})
	.listen(port, host, () => {
		console.log(`CORS Anywhere działa na http://${host}:${port}`);
	});
