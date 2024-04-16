// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const uniqid = require("uniqid");

// function orderDrinks() {
//     const drinksData = fs.readFileSync("./data/food-drinks-package.json");
//     console.log(drinksData)
//     const parsedData = JSON.parse(drinksData);
//     return parsedData;
// }

// router.use((_req, res, next) => {
//     next();
// });

// router.get("/", (_req, res) => {
//     const drinksData = fs.readFileSync("./data/food-drinks-package.json");
//     const parsedData = JSON.parse(drinksData);
//     res.json(parsedData);
// });



// module.exports = router;