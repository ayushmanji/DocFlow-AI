require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const documentRoutes = require("./routes/documentRoutes");
const uploadRoutes =
    require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/documents", documentRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("DocFlow API Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});

app.use(
    "/api/upload",
    uploadRoutes
);