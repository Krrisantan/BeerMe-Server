const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function tableNumber() {
    const tableData = fs.readFileSync("./data/tables.json");
    const parsedData = JSON.parse(tableData);
    return parsedData;
}

router.use((_req, res, next) => {
    console.log("Middleware from the table router");
    next();
});

router.get("/", (_req, res) => {
    const tableData = fs.readFileSync("./data/tables.json");
    const parsedData = JSON.parse(tableData);
    res.json(parsedData);
});



module.exports = router;