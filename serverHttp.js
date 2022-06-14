const http = require('http');

http.createServer((request, response) => {
  const books = [
    'The Witcher',
    '39 keys',
    'Ukrainian history',
    'Kobzar',
  ];
  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(books));
  } if (request.method === 'DELETE') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    books.shift();
    response.write(JSON.stringify(books));
  } if (request.method === 'PATCH') {
    let info = '';
    response.writeHead(200, { 'Content-Type': 'application/json' });
    request.on('data', (chunk) => {
      info += chunk;
      console.log(`Data chunk available: ${chunk}`);
    });
    books.push(info);
    response.write(JSON.stringify(books));
  }
  response.end();
}).listen(8000, () => {
  console.log('server is listening');
});
