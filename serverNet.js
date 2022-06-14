const net = require('node:net');

// The port on which the server is listening.
// BURST Reference Software uses TCP ports-
// 8123 (p2p), 8124 (standard mining pool port), 8125 (web interface)
const port = 8124;

// Create a new TCP server.
const server = net.createServer((connection) => {
  console.log('client connected');

  connection.on('end', () => {
    console.log('client disconnected');
  });

  // Now that a TCP connection has been established, the server can send data to
  // the client by writing to its socket.
  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, () => {
  console.log('server is listening');
});
