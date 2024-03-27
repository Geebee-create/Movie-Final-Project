require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/itemsRoute");
const UserModel = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Use bcrypt or a similar library for secure password comparison
        if (user.password === password) {
          res.status(200).json({ message: "success" });
        } else {
          res.status(401).json({ message: "Incorrect password" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
});

// Register endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  UserModel.create({ name, email, password })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
});

app.use("/movies", itemRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000, connected to database");
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit the process if unable to connect to the database
  });
