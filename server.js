const express = require("express");
const bodyParser = require("body-parser");

const route = require("./routes/route");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/route", route);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
