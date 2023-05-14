import { User } from "./user.model";
import { IUser } from "./user.interface";

export const getUserFromDB = async (): Promise<IUser[]> => {
    const allUser = await User.find();
    return allUser;
}

export const getOneUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
    return user;
}

export const getAdminUserFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}

export const getStudentUsersFromDb = async () => {
    const students = await User.getStudentUsers();
    return students;
}

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating an instance by using the model
    const user = new User(payload); // create user instance from User class
    await user.save(); // the user instance with save() method -> instance method // the method is given by mongoose -> built in instance method
    console.log(user.fullName());; // custom instance method
    return user;
}