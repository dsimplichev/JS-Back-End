const http = require("http");
const homeHtml = require("./views/home/index.js")
const cssSite = require("./content/styles/site.js")
const addBreedHtml = require("./views/addBreed.js")
const addCatHtml = require("./views/addCat")
const catTemplateHtml = require("./views/home/catTemplate.js")
const PORT = 3004;

const cats = [
    {
        imageUrl: 'https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg',
        name: 'Tommy',
        breed: 'British',
        description: 'Toomy is very cute!'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUhHwdFgOUw8_EGSVyhtYfdwGKVpkx4PMeRB3k5RtwjvYezpkt9_7BgE00OPp-rKG9oU&usqp=CAU',
        name: 'Spot',
        breed: 'British',
        description: 'Spot is very cute!'
    },
    {
        imageUrl: 'https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925',
        name: 'Socks',
        breed: 'British',
        description: 'Socks is very cute!'
    },
    {
        imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753",
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