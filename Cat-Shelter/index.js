const http = requier("http");

const PORT = 3004;

const server = http.createServer((req, res) =>{

    res.write("Hello");
    res.end();
});

server.listen(PORT,  () => console.log(`Server is running on port ${PORT}`))