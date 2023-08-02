const ws = new WebSocket("ws://localhost:7071/ws");

ws.onmessage = msg => {
    console.log(msg)
    console.log(msg.data)
}

document.body.onmousemove = event => {
    const messageBody = {
        x: event.clientX,
        y: event.clientY,
    }
    ws.send(JSON.stringify(messageBody))
}