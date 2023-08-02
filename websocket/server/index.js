const webSocket = require('ws');
const wss = new webSocket.Server({port: 7071})

wss.on('connection', (ws) => {
    ws.send('connected')

    ws.on('message', messageFromClient => {
        const message = JSON.parse(messageFromClient)
        console.log(message);
    })
})