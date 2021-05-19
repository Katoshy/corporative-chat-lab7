const ws = require('ws');

const port = process.env.PORT || 80;
const wss = new ws.Server({ port });

console.log(`=> Server is listening on ${port}`);

wss.on('connection', async (ws) => {
	ws.on('message', async (message) => {
		console.log(`-> received: ${message}`);

		wss.clients.forEach(client => {
			if (client.readyState === ws.OPEN && client !== ws) {
				client.send(message);
			}
		});
	});
});
