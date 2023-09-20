const http = require("http");
const homeHtml = require("./views/home/index.js")
const cssSite = require("./content/styles/site.js")
const addBreedHtml = require("./views/addBreed.js")
const addCatHtml = require("./views/addCat")
const catTemplateHtml = require("./views/home/catTemplate.js")
const PORT = 3004;

const cats = [
    {
        imageUrl: '',
        name: 'Tommy',
        breed: 'British',
        description: 'Toomy is very cute!'
    },
    {
        imageUrl: '',
        name: 'Spot',
        breed: 'British',
        description: 'Spot is very cute!'
    },
    {
        imageUrl: '',
        name: 'Socks',
        breed: 'British',
        description: 'Socks is very cute!'
    },
    {
        imageUrl: '',
        name: 'Jerry',
        breed: 'British',
        description: 'Jerry is very cute!'
    },
]
const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === "/") {
       const imageUrlPattern = /{{imageUrl}}/g;
       const namePattern = /{{name}}/g;
       const breedPattern = /{{breed}}/g;
       const descriptionPattern = /{{description}}/g;

       const catHtml = cats.map((cat) => 
       catTemplateHtml
          .replace(imageUrlPattern, cat.imageUrl)
          .replace(namePattern, cat.name)
          .replace(breedPattern, cat.breed)
          .replace(descriptionPattern, cat.description)
       );
       const homeHtmlTemplate = homeHtml.replace("{{cats}}", catHtml)
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(homeHtmlTemplate)

    } else if (url === '/content/styles/site.css') {
        res.writeHead(200, {
            "Content-Type": "text/css"
        });
        res.write(cssSite);
    } else if (url === '/cats/add-breed') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(addBreedHtml)
    } else if (url === '/cats/add-cat') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(addCatHtml)
    }
    
    res.end();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))