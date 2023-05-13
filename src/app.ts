import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    // creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        age: number;
        dateOfBirth?: string;
        gender: "male" | "female" | "others";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string
    }

    // creating schema by using interface
    const userSchema = new Schema<IUser>({
        id: { type: String, required: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String, required: false },
            lastName: { type: String, required: true }
        },
        age: { type: Number, required: true },
        dateOfBirth: { type: String, required: false },
        gender: { type: String, enum: ["male", "female", "other"] },
        email: { type: String, required: false },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true }
    })

    // res.send("Hello World");
})

export default app;

// insert data to mongodb
/* 
    1. create an interface
    2. Create a schema
    3. create a model from schema
    4. Database Query
*/