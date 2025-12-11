const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      service: 'GENESIS-SERVICE',
      status: 'online',
      ts: new Date().toISOString(),
    })
  );
});

server.listen(PORT, () => {
  console.log(`GENESIS-SERVICE listening on port ${PORT}`);
});
