const express = require('express'); //nos va a levanta el servidor-> servidor global (la máquina)
const http = require('http'); //dentro del servidor global, levantamos un nuevo servidor, que solo va a escuchar los mensajes del chat
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST']
	}
}); //nos viene desde la librería de socket. Permite conexiones del puerto de react (5173) y solo admite los métodos get y post.

io.on('connection', socket => {
	console.log(`Usuario conectado: ${socket.id} (socket.id: ${socket.id})`);
	connectedUsers.set(socket.userId, socket.id);

	socket.on('disconnect', () => {
		console.log(`Disconnected user: ${socket.id}`);
		connectedUsers.delete(socket.id);
	});
});
//io es nuestro chat, que tiene eventos predefinidios
//socket es el "evento" de conexión. la información del cliente que se ha conectado

server.listen(3000, () => {
	console.log(`Server listening on http://localhost:3000`);
}); //escucha el puerto 3000
