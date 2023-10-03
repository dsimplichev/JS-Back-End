const express = require("express");
const PORT = 5004;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Deni!")
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )