// incase of require we can use import cause we are using typescript
import mongoose from 'mongoose';
import app from './app';

const port = 5000;

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