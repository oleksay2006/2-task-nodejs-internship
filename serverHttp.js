const http = require('http'); // Import Node.js core module

const server = http.createServer((req, res) => { // create web server
  const books = [
    'The Witcher',
    '39 keys',
    'Ukrainian history',
    'Kobzar',
  ];
  console.log('client connected', req.method);
  if (req.method === 'DELETE') { // check the URL of the current request
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Book succesfully deleted');
    res.end();
    console.log('client disconnected');
  } else if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('GET method', books);
    res.end();
    console.log('client disconnected');
  } else { res.end('Invalid Request!'); }
});

server.listen(5000); // 6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// // создать сервер
// http.createServer((request, response) => {
//   // Разбор запроса, включая имя файла
//   const { pathname } = url.parse(request.url);

//   // выводим запрошенное имя файла
//   console.log(`Request for ${pathname} received.`);

//   // Чтение запрошенного содержимого файла из файловой системы
//   fs.readFile(pathname.substr(1), (err, data) => {
//     // Substr (1) здесь обязателен, текущий путь получен
//     if (err) {
//       console.log(err);
//       // Код состояния HTTP: 404: НЕ НАЙДЕН
//       // Content Type: text/plain
//       response.writeHead(404, { 'Content-Type': 'text/html' });
//     } else {
//       // Код статуса HTTP: 200: ОК
//       // Content Type: text/plain
//       response.writeHead(200, { 'Content-Type': 'text/html' });

//       // содержимое файла ответа
//       response.write(data.toString());
//     }
//     // отправляем данные ответа
//     response.end();
//   });
// }).listen(8080);

// // Консоль выведет следующую информацию
// console.log('Server running at http://127.0.0.1:8080/');
