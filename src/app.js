const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", require("./routes/heatlhcheck.route"));
module.exports = app;
