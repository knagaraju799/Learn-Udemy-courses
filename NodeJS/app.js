const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello");
  console.log(req.method, req.url);
  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
  <head>
  <title>First Prog</title>
  </head>
  <body>
    <h1> Hello, Client </h1>
  </body>
  </html>`);
  res.end();
});

server.listen(5000);
