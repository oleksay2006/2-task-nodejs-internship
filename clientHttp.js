const http = require('http');

const info = JSON.stringify('Ridniy kray');

const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/',
  method: 'PATCH',
  body: {
    id: 1,
    new_name: 'Ridniy kray',
  },
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (err) => {
  console.error(err);
});

req.write(info);
req.end();
