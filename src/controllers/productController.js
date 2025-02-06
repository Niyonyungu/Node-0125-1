import ProductModel from "../database/models/productModel";
import dotenv from "dotenv"

dotenv.config();

const addProduct = async (req, res) =>{
    try {
        const productData = req.body
        const product = await ProductModel.create({...productData, doneBy: req.user._id})
        return res.status(201).json({
            status: 201,
            message: 'Product Created sucesfully ',
            productData: product
        })         
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}

const getProducts = async (req, res) => {
    try {     
        const products = await ProductModel.find().populate("doneBy")
        return res.status(201).json({
            status: 201,
            message: 'Products retrieved sucesfully ',
            productData: products
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}


export default { addProduct , getProducts }

