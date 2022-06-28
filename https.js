const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.write("Welcome to home Page");
  }
  if (req.url === `/about`) {
    res.write("You are on About Page");
  }
});

server.listen(3000);
