import express from "express"
import product from "../controllers/productController"
import isAuthorized from "../middlewares/auth";
import roleMiddleware from "../middlewares/authRole";

const productRouter = express.Router();

productRouter.post("/AddProduct", isAuthorized, roleMiddleware(["admin", "manager"]), product.addProduct)
productRouter.get("/Products", isAuthorized, product.getProducts)
productRouter.get("/ProductDetails/:productId", isAuthorized, product.getProductDetails)
productRouter.delete("/deleteProduct/:productId", isAuthorized, roleMiddleware(["admin", "manager"]), product.deleteProduct)
productRouter.patch("/updateProduct/:productId", isAuthorized, roleMiddleware(["admin", "manager"]), product.updateProduct)

export default productRouter