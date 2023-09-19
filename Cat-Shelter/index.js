const http = require("http");
const homeHtml = require("./views/home/index.js")
const cssSite = require("./content/styles/site.js")
const PORT = 3004;

const server = http.createServer((req, res) =>{
   const { url } = req;

   if(url === "/"){
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(homeHtml)
    
   } else if(url === '/content/styles/site.css'){
    res.writeHead(200,{
        "Content-Type": "text/css"
    });
    res.write(cssSite);
   }
    res.write("Hello");
    res.end();
});

server.listen(PORT,  () => console.log(`Server is running on port ${PORT}`))