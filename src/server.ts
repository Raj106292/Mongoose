// incase of require we can use import cause we are using typescript
import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

// database connection
async function connectWithDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database connected successfully");

        // the app run when the database connected successfully
        app.listen(port, () => {
            console.log(`New server created with port ${port}`);
        })
    } catch(error) {
        console.log("Database connection failed", error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connectWithDatabase();

app.get("/", (req, res) => {
    res.send("Hello World");
})