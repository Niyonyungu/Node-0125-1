import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "clothing", "home", "food"]
    },
    doneBy: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true,
    }
},
    {
        timestamps: true
    }
)

const ProductModel = mongoose.model("products", productSchema);

export default ProductModel