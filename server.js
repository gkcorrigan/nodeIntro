const http = require("http");

http.createServer((request, response) => {
    //putting a label on the package
response.writeHead(200, {"content-type": "text/html"});
response.write("Hello World!");
response.end();
}).listen(5000, () => {
    console.log("Server has started listening on port 5000...");
});