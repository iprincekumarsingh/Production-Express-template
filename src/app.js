import express from "express";
import cors from "cors";
import morgan from "morgan";
// import appRoutes from "./routes/index.js";
const app = express();

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

export { app };