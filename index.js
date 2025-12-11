import http from "http";

const server = http.createServer((req, res) => {
  res.end("GENESIS OS LIVE ENDPOINT");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
