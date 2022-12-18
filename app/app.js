const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const booking = require("./routes/booking");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
var cors = require("cors");
app.use(cors());

app.use(booking);
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
