import { NextFunction, Request, Response } from "express";
import { getUserFromDB, createUserToDB, getOneUserByIdFromDB } from "./user.service";

export const getUser = async (req: Request, res: Response) => {
   const user = await getUserFromDB();
   res.json(user);
}

export const getUserByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await getOneUserByIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user
    })
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "success",
        data: user
    })
}

// Route -> Controller -> Service -> Model -> Interface