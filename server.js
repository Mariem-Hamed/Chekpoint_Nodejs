//We require Node.js http module :allows us to create a server and handle HTTP requests.
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //indicate sucess
  res.setHeader("Content-Type", "text/html");
  //text/html :indicate that we will be sending back an HTML document

  // end ()to send the HTML content back to the client
  res.end("<h1>Hello Node</h1>\n");
});

//listen() method / pass in the port number (3000) and a callback function that will be called once the server is running
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
