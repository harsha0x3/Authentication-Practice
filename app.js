const express = require("express");
const app = express();
require('dotenv').config();
app.get("/", (req, res) => {
    res.send("<h1>I am working</h1>")
})
module.exports = app