require("dotenv").config();
const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");

app.use(express.json());

const connection = require("./db");


connection();
app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));