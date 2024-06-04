import express from 'express';
import { productController } from './product.controller';
const router = express.Router()


router.post("/", productController.createProduct)
router.get("/", productController.getAllProduct)
router.get("/:productId", productController.getSingleProduct)
router.delete("/:productId", productController.deleteProduct)



export const productRouter = router