require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes


const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const categoryRoutes = require("./routes/category.route.js");
const productRoutes = require("./routes/product.route.js");
const orderRoutes = require("./routes/order.route.js");
// const paymentBRoutes = require("./routes/paymentBRoutes");



//DB Connection


// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => {
//     console.log("DB CONNECTED");
//   });

//Middlewares


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes


app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
// app.use("/api", paymentBRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
