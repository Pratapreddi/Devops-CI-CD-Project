const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Frontend is running");
});

server.listen(3000, () => console.log("Frontend running"));
