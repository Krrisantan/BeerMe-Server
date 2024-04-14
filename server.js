const express = require("express");
const app = express();
const PORT = 8080;
const foodRoutes = require("./routes/foodRoutes");
const drinksRoutes = require("./routes/drinksRoutes");
const tablesRoutes = require("./routes/tablesRoutes");
const ordersRoutes = require("./routes/ordersRoutes")
const cors = require('cors');
const fs = require("fs");
const uniqid = require("uniqid");

require('dotenv').config();

app.use(cors());

app.use(express.json());

// Do I need this? I'm not sure TODO
// app.use(express.static('build'));

app.use( express.static("public"));

app.use((_req, res, next) => {
    console.log("Middleware running");
    next();
});

app.use((_req, res, next) => {
    if (_req.method === "POST" && _req.headers["content-type"] !== "application/json") {
        return res.status(400).send("What's this? Give me proper JSON");
    }
    next();
});

app.get('/', (_req, res) => {
    return res.send("I am working");
})

// app.get("/routes/drinksRoutes", (_req, res) => {
//     const drinksData = fs.readFileSync("./data/drinks-package.json");
//     console.log(drinksData)
//     const parsedData = JSON.parse(drinksData);
//     res.json(parsedData);
// });

// app.route("/ordersRoutes")
// //OR
// app.use("/routes", ordersRoutes);

// app.route("/drinksRoutes")
//OR
app.use("/drinksRoutes", drinksRoutes);
app.use("/foodRoutes", foodRoutes);
app.use("/tablesRoutes", tablesRoutes);
app.use("/ordersRoutes", ordersRoutes)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});