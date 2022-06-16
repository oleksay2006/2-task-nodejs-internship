const http = require('http');

const info = JSON.stringify('Ukrainian Literature');
const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/',
  method: 'POST',
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
