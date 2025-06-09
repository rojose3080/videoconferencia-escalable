
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socket => {
  socket.on('join', () => {
    socket.broadcast.emit('new-user');
  });

  socket.on('offer', data => {
    socket.broadcast.emit('offer', data);
  });

  socket.on('answer', data => {
    socket.broadcast.emit('answer', data);
  });

  socket.on('candidate', data => {
    socket.broadcast.emit('candidate', data);
  });
});

server.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
