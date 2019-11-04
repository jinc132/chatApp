const WebSocket = require('ws');

const connect = new WebSocket.Server({ port: 8080 })

connect.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        connect.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
