import { HydratedDocument, Model } from "mongoose";

// creating an interface
export interface IUser {
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

// create an interface of method
export interface IUserMethods {
    fullName(): string;
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getStudentUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}