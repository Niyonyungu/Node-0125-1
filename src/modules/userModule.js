import UserModel from "../database/models/userModel.js"

const createUser = async(req , res) =>{

    try {
        const UserData = req.body
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
        return res.status(204).json({
            status: 204,
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


export default { createUser, getUsers, getUserDetails, deleteUser, updateUser };