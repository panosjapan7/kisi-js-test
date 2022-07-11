const express = require("express");
const app = express();
const path = require("path");
const router = express.Router;
const axios = require("axios");
const PORT = 3000;

// View engine setup
// app.set("view engine", "html");


let apiData;
// GET data from API - Axios
axios
    .get('https://api.themoviedb.org/3/trending/all/day?api_key=238cb64db6302e7587f0099a49af4b3d&page=1')
    .then(res => {
        console.log("Status Code: ", res.status);
        apiData = res.data.results;
    })
    .catch(error => {
        console.log(error);
    })

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { apiData });
})

app.use("/", router);
app.listen(PORT, () => {
    console.log("Server running at " + PORT);
});
