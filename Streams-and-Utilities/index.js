const express = require("express");
const { v4: uuid }= require("uuid");
const PORT = 5004;
const app = express();

app.get('/', (req, res) => {
    const id = uuid();
    res.send("Hello Deni! ID:" + id);
    req.headers("Set-Cookie" `userID = ${id}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )