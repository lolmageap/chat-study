const http= require('http').createServer()

const io = require('socket.io')(http, {
    cors: {origin : '*'}
})

io.on('connection', socket => {
    console.log('a user connected')
    socket.on('message', message => {
        io.emit('message', `${socket.id.substring(0, 3)} said ${message}`)
    })
})

const port = 8089
http.listen(port, ()=>{
    console.log(`listening on http://localhost:8089`)
})