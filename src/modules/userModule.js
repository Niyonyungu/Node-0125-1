import UserModel from "../database/models/userModel.js"

const createUser = async(req , res) =>{

    try {
        const data = req.body
        const user = await UserModel.create(data)
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

export default createUser;