const express = require("express");
const app = express();
const path = require("path");
const router = express.Router;
const axios = require("axios");
const PORT = 3000;

app.set("view engine", "html");




app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.use("/", router);
app.listen(PORT, () => {
    console.log("Server running at " + PORT);
});
