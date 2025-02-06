import UserModel from "../database/models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        // checking if the user (req) has the same email from the userModel
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User Email not found",
            });
        }
        // checking if the password of the user (req) is the same password from the Srored Password ==> By Comparing them
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(404).json({
                status: 404,
                message: "User Password not found",
            });
        }
        // Generating the token 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
        return res.status(200).json({
            status: 200,
            message: "logged In successfully",
            token,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}


