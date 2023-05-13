import { Schema, model } from "mongoose";
import IUser from "./user.interface";

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

export default User;