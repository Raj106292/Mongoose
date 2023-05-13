const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// database connection
async function connectWithDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database connected successfully");
    } catch(error) {
        console.log("Database connection failed", error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connectWithDatabase();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`New server created with port ${port}`);
})