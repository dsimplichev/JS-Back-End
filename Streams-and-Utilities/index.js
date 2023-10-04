const express = require("express");
const { v4: uuid }= require("uuid");
const cookieParser = require("cookie-parser");
const PORT = 5004;

const app = express();
app.use(cookieParser());


app.get('/', (req, res) => {
    let id;
    // const cookie = req.headers["cookie"];
  const userId = req.cookies["userId"];
    if(userId) {
        id = userId;
        console.log(req.session);
    } else {
        id = uuid();
        req.cookies("userId, id");
    }
    res.send("Hello Deni! ID:" + id);
    
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )