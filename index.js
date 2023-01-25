require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

const programmingLanguagesRouter = require("./routes/programming.languages.routes");
const userRouter = require('./routes/users.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

// use all routes
app.use("/programming-languages", programmingLanguagesRouter);
app.use("/users", userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});