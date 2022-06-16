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
    response.end();
  } if (request.method === 'DELETE') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    books.shift();
    response.write(JSON.stringify(books));
    response.end();
  } if (request.method === 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      try {
        const jsonObj = JSON.parse(body);
        books.push(jsonObj);
        console.log(books);
      } catch (e) {
        console.error(e);
      }
      response.on('error', (err) => {
        console.error(err);
      });
      response.writeHead(200);
      response.end();
    });
  }
}).listen(8000, () => {
  console.log('server is listening');
});
