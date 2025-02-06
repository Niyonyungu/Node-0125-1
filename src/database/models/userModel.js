import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
},
{
    timestamps: true
}
)

const UserModel = mongoose.model("users", userSchema)

export default UserModel;