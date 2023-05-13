import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

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
        id: { type: String, required: true, unique: true },
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

    // creating model by using interface and schema
    const User = model<IUser>("User", userSchema);

    const createUserToDB = async () => {
        // creating an instance by using the model
        const user1 = new User({
            id: "106292",
            role: "student",
            password: "password",
            name: {
                firstName: "Raj",
                lastName: "Das"
            },
            age: 20,
            dateOfBirth: "01/01/2000",
            gender: "male",
            email: "tugrp@example.com",
            contactNo: "0123456789",
            emergencyContactNo: "0123456788",
            presentAddress: "Uganda",
            permanentAddress: "India"
        })
    
        await user1.save();
        console.log(user1);
    }
    createUserToDB();
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