const express = require("express");
const { readFileSync } = require("fs");
const app = express();
app.listen(3000);

const posts = JSON.parse(readFileSync("data/datas.json"));
console.log(posts);