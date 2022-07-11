const express = require("express");
const app = express();
const path = require("path");
const router = express.Router;
const axios = require("axios");
const PORT = 3000;

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

// Serve static files
app.use(express.static(__dirname + "/public"));

// View engine setup
app.set("view engine", "html");

// Root Route
app.get("/", (req, res) => {
    res.render("index.ejs", { apiData });
})

// Single Article Route
app.get("/:category/:articleTitle", (req, res) => {
    let selectedMovie;

    // Find clicked Article 
    for(let i=0; i < apiData.length; i++) {
        if(apiData[i].title === req.params.articleTitle || 
            apiData[i].name === req.params.articleTitle) {
                selectedArticle = apiData[i];
        }
    }
    
    res.render("article.ejs", { selectedArticle });
})

app.use("/", router);
app.listen(PORT, () => {
    console.log("Server running at " + PORT);
});
