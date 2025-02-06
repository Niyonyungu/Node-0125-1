import express from "express"
import product from "../controllers/productController"
import isAuthorized from "../middlewares/auth.js";
import roleMiddleware from "../middlewares/authRole.js";

const productRouter = express.Router();

productRouter.post("/AddProduct", isAuthorized, roleMiddleware(["admin"]), product.addProduct)
productRouter.get("/Products", isAuthorized, roleMiddleware(["admin"]), product.getProducts)

export default productRouter