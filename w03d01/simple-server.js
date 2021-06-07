const http = require('http');

const server = http.createServer((request, response) => {
  // console.log('request', request);
  const url = request.url;
  const method = request.method;

  const req = `${method} ${url}`;
  console.log('incoming request', req);

  if (req === 'GET /home') {
    response.write('you have visited the home page');
  } else if (req === 'GET /about') {
    response.write('welcome to the about page');
  } else {
    response.write('this is not the resource you are looking for');
  }

  // response.write('happy Monday!!');
  response.end();
});

server.listen(43567);
