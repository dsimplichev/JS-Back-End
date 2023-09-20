const http = require("http");
const homeHtml = require("./views/home/index.js")
const cssSite = require("./content/styles/site.js")
const addBreedHtml = require("./views/addBreed.js")
const addCatHtml = require("./views/addCat")
const PORT = 3004;

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(homeHtml)

    } else if (url === '/content/styles/site.css') {
        res.writeHead(200, {
            "Content-Type": "text/css"
        });
        res.write(cssSite);
    } else if (url === '/cats/add-breed'){
        res.writeHead(200,{
            "Content-Type": "text/html"
        });
        res.write(addBreedHtml)
    } else if (url === '/cats/add-cat') {
        res.writeHead(200, {
            "Content-Type": "text/html"   
        });
        res.write(addCatHtml)
    }
    res.write("Hello");
    res.end();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))