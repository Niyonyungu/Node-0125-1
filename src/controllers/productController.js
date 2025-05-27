import ProductModel from "../database/models/productModel";
import dotenv from "dotenv"
import { productSchema } from "../validation/productValidation";

dotenv.config();

const addProduct = async (req, res) => {
    try {
        // Validate request body
        const { error, value } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: 400,
                message: "Validation error",
                error: error.details[0].message
            });
        }

        const product = await ProductModel.create({ ...value, doneBy: req.user._id })
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
                message: "Product not found"
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
                message: "Product not found"
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
        // Validate request body for update
        const { error, value } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: 400,
                message: "Validation error",
                error: error.details[0].message
            });
        }

        const { productId } = req.params;

        const product = await ProductModel.findByIdAndUpdate(productId, value, { new: true }).populate("doneBy", "_id")
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found"
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

