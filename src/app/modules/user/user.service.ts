import User from "./user.model";
import IUser from "./user.interface";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating an instance by using the model
    const user = new User(payload);
    await user.save();
    return user;
}

export const getUserFromDB = async () : Promise<IUser[]> => {
    const allUser = await User.find();
    return allUser;
}