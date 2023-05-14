import User from "./user.model";
import IUser from "./user.interface";

export const getUserFromDB = async () : Promise<IUser[]> => {
    const allUser = await User.find();
    return allUser;
}

export const getOneUserByIdFromDB = async (payload: string) : Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, email: 1});
    return user;
}

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating an instance by using the model
    const user = new User(payload);
    await user.save();
    return user;
}