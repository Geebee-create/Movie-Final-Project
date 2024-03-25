require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/itemsRoute");
const app = express();
const UserModel = require("./models/User");
app.use(cors());
//parse incoming data
app.use(express.json());

app.post("login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOn({ email: email }).then((user) => {
    if (user) {
      if ((user.password = password)) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("The user does not exist");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req, body)
    .then((Users) => res.json(Users))
    .catch((err) => res.json(err));
});

app.use("/movies", itemRoutes);
// above line creates the endpoint http://localhost:4000/movies/post or http://localhost:4000/movies/comment

// this is how we can locally add to our database, by putting this endpoint into thunderclient (an id will need to be placed after it)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("listening on port 4000, connected to db");
    });
  })

  .catch((error) => {
    console.log(error);
  });
