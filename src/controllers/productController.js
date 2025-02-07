import ProductModel from "../database/models/productModel";
import dotenv from "dotenv"

dotenv.config();

const addProduct = async (req, res) => {
    try {
        const productData = req.body
        const product = await ProductModel.create({ ...productData, doneBy: req.user._id })
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
        const products = await ProductModel.find().populate("doneBy", "names email")
        return res.status(201).json({
            status: 201,
            message: 'Products retrieved sucesfully ',
            productsData: products
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}

const getProductDetails = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.productId)
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found",
            });
        }
        return res.status(201).json({
            status: 201,
            message: 'Product details retrieved sucesfully ',
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

const deleteProduct = async (req, res) => {
    try {

        const { productId } = req.params;
        const product = await ProductModel.findByIdAndDelete(productId).populate("doneBy", "_id")
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found",
            });
        }
        return res.status(201).json({
            status: 201,
            message: 'Product deleted sucesfully ',
            deletedBy: product.doneBy._id
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}

const updateProduct = async (req, res) => {
    try {

        const { productId } = req.params;
        
        const product = await ProductModel.findByIdAndUpdate(productId, req.body , {new : true }).populate("doneBy", "_id")
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found",
            });
        } 
        return res.status(201).json({
            status: 201,
            message: 'Product Updated sucesfully ',
            product: product,
            updatedBy: product.doneBy._id
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "error occured",
            error
        })
    }
}

export default { addProduct, getProducts, getProductDetails, deleteProduct, updateProduct }

