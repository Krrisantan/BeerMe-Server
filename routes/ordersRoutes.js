const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function readOrdersData() {
    const ordersData = fs.readFileSync("./data/orders.json");
    console.log(ordersData);
    const parsedData = JSON.parse(ordersData);
    return parsedData;
}

router.get("/orders", (_req, res) => {
    res.json(readOrdersData());
})

router.get("/orders/:id", (_req, res) => {
    const ordersData = fs.readFileSync("./data/orders.json");
    const parsedData = JSON.parse(ordersData);
    const filteredData = parsedData.filter((order) => order.id == _req.params.id)

    res.json(filteredData);
});

// POST from Customer side to the orders JSON file
router.post("/orders", (_req, res) => {
    const newOrder = {
        id: uniqid(),
        name: _req.body.name,
        quantity: _req.body.quantity,
        table_number: _req.body.table_number,
        ordered: _req.body.ordered
    }
    const allOrders = readOrdersData();
    allOrders.push(newOrder);

    fs.writeFileSync("./data/orders.json", JSON.stringify(allOrders));

    res.status(201).json(newOrder);
    res.json(readOrdersData())
})

router.use((_req, res, next) => {
    next();
})

router.get("/", (_req, res) => {
    const newOrdersData = fs.readFileSync("./data/orders.json");
    const parsedData = JSON.parse(newOrdersData);
    res.json(parsedData);
});

// DELETE from orders.JSON

router.delete("/orders/:id", (_req, res) => {
    console.log('here')
    const ordersData = fs.readFileSync("./data/orders.json");

    const parsedData = JSON.parse(ordersData);

    const filteredData = parsedData.filter((order) => order.id != _req.params.id)
    fs.writeFileSync("./data/orders.json", JSON.stringify(filteredData));

    res.status(204).send("You deleted an order from database");
});


module.exports = router;

