import UserModel from "../database/models/userModel.js"
import bcrypt from "bcrypt"

const createUser = async(req , res) =>{

    try {
        let UserData = req.body
        console.log("password before Hashing::::::::::", UserData.password)
        const userPassword = await bcrypt.hash(UserData.password, 10)
        UserData = {...UserData, password:userPassword}
        const user = await UserModel.create(UserData)
        return res.status(201).json({
            status: 201,
            message: "user created successfully",
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

const getUsers = async (req, res) =>{
    try {
        const Users = await UserModel.find()
        return res.status(200).json({
            status: 200,
            message: "users retrieved successfully",
            data: Users
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}

const getUserDetails = async (req, res) => {
  try {
      const UserDetails = await UserModel.findById(req.params.id)
      return res.status(201).json({
          status: 201,
          message: "user Details retrieved successfully",
          data: UserDetails
      })
  } catch (error) {
      return res.status(500).json({
          status: 500,
          message: "error occured",
          error
      })
  }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        return res.status(201).json({
            status: 201,
            message: "user Deleted successfully",
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

const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found",
            });
        }
        return res.status(200).json({
            status: 200,
            message: "user Updated successfully",
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


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const userByEmail = await UserModel.findOne({email})
        if (!userByEmail) {
            return res.status(404).json({
                status: 404,
                message: "User Email not found",
            });
        }
        const userByPassword = userByEmail.password
        const isPasswordValid = await bcrypt.compare(password, userByPassword);

        if (!isPasswordValid) {
            return res.status(404).json({
                status: 404,
                message: "User Password not found",
            });
        }
        return res.status(200).json({
            status: 200,
            message: "logged In successfully",
            data: userByEmail
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}


export default { createUser, getUsers, getUserDetails, deleteUser, updateUser, userLogin };