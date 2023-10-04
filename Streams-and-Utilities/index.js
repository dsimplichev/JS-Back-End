const express = require("express");
const { v4: uuid }= require("uuid");
const PORT = 5004;
const app = express();

app.get('/', (req, res) => {
    let id;
    const cookie = req.headers["cookie"];

    if (cookie) {
        const [key, value] = cookie.split("=");
        id = value;
        console.log({ key });
        console.log({ value });
    } else {
        id = uuid();
        res.header("Set-Cookie", `userId=${id}`);
    }
    res.send("Hello Deni! ID:" + id);
    
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )