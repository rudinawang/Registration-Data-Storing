const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Database Connectivity ---------------------------------------
mongoose
  .connect(
    "mongodb+srv://rudnawang07:Rudra%40143@cluster0.aa2fach.mongodb.net/Registration"
  )
  .then(() => {
    console.log("Database Connection Done");
  })
  .catch(() => {
    console.log("Database Connection Fails");
  });

// Model Importing --------------------------------------------

const User = require("./model/user");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const user = req.body;

  const data = new User(req.body);
  await data.save();

  console.log(req.body);
  res.send("Save Data");
});

//app.post("/", async (req, res) => {
//   try {
//     const data = await User.create(req.body);
//     res.send("Save Data");
//   } catch (error) {
//     // Handle any errors that occur during the save operation
//     console.error(error);
//     res.status(500).send("Error saving data");
//   }
//   try {
//     const data = new User(req.body);

//     await data.save();
//     res.send("Save Data");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error saving data");
//   }
// });

app.listen(3000, () => {
  console.log(`Server is Running at Port: ${port}`);
});
