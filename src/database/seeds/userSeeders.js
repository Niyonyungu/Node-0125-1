import UserModel from "../models/userModel";
import { hashPassword } from "../../helpers/authHelpers";
import DbConnection from "../config/connection";

const seedUsers = async () => {
    const users = [
        {
            names: "Mucyo John",
            email: "mucyo.john@example.com",
            password: await hashPassword("SecurePass123!"),
            role: "admin",
        },
        {
            names: "Kageri James",
            email: "gakeri.john@example.com",
            password: await hashPassword("SecurePass123!"),
            role: "manager",
        },
    ];
    await UserModel.insertMany(users);
    console.log("Users added well", users);
};
DbConnection().then(() => {
    seedUsers();
})