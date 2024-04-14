const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function orderFood() {
    const foodData = fs.readFileSync("./data/food-package.json");
    // console.log(foodData)
    const parsedData = JSON.parse(foodData);
    return parsedData;
}

router.use((_req, res, next) => {
    console.log("Middleware from the food router");
    next();
});

router.get("/", (_req, res) => {
    const foodData = fs.readFileSync("./data/food-package.json");
    // console.log(drinksData)
    const parsedData = JSON.parse(foodData);
    res.json(parsedData);
});



module.exports = router;