import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// create a model which know about the interface method
// type UserModel = Model<IUser, {}, IUserMethods>;

// creating schema by using interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
})

userSchema.static("getAdminUsers", async function getAdminUsers() {
    const admins = await this.find({role: "admin"});
    return admins;
})

userSchema.static("getStudentUsers", async function getStudentUsers() {
    const students = await this.find({role: "student"});
    return students;
})

// creating model by using interface and schema
export const User = model<IUser, UserModel>("User", userSchema);