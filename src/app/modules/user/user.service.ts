import User from "./user.model";

export const createUserToDB = async () => {
    // creating an instance by using the model
    const user = await new User({
        id: "104800",
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

    await user.save();
    console.log(user);
}