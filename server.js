const express = require("express");
const app = express();
const path = require("path");
const router = express.Router;
const axios = require("axios");
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Server Setup")
})

app.use("/", router);
app.listen(PORT, () => {
    console.log("Server running at " + PORT);
});
