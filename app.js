const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const auditRoutes = require("./route/audit.route");

app.use(express.json());

app.use("/", auditRoutes);

module.exports = app;