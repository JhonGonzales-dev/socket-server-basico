const express = require('express');
const app =express();
const port = 3001;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', client =>{
    console.log('nuevo cliente conectado');
    client.on('disconnect',()=>{
        console.log('cliente desconectado');
    });
    client.on('mensaje',(data)=>{
        console.log('mensaje', data)
        io.emit('mensaje',{dmin:'hello gamster'});
    })
})
setInterval(() => {
    io.emit('mensaje','joooooojooojo');
}, 3000);
server.listen(port,(error)=>{
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${port}`)
})
