const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const foodDrinksRoutes = require("./routes/foodDrinksRoutes");
// const drinksRoutes = require("./routes/drinksRoutes");
const tablesRoutes = require("./routes/tablesRoutes");
const ordersRoutes = require("./routes/ordersRoutes")
const cors = require('cors');
const fs = require("fs");
const uniqid = require("uniqid");
const allowedOrigins = [
  'https://beer-me.netlify.app', // Patron client side
  'https://beer-me-waitstaff.netlify.app' // Server client side
];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

require('dotenv').config();

// app.use(cors({
//     origin: 'https://beer-me.netlify.app'
// }));

// app.use(cors());

app.use(express.json());

app.use( express.static("public"));

app.use((_req, res, next) => {
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

// app.use("/drinksRoutes", drinksRoutes);
app.use("/foodDrinksRoutes", foodDrinksRoutes);
app.use("/tablesRoutes", tablesRoutes);
app.use("/ordersRoutes", ordersRoutes)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});