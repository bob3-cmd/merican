const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
var counter = 0;
const app = express();
const server = createServer(app);
const io = new Server(server);
var host;

app.use(express.static(__dirname))

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("ready", ()=> {
    counter += 1;
    if (counter % 3 === 0) {
        host.emit("turn")
    }
  })
  socket.on("host", ()=>{
    host = socket;
  }) 
  socket.on("start", ()=> {
    socket.broadcast.emit("begin")
  })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});