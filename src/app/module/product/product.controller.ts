import { Request, Response } from "express";
import { productService } from "./product.service";

// create a new product
const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const data = await productService.createProduct(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data,
        })
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: error.message,
            data: null,
        })
    }
}
// get all products from the database

const getAllProduct = async (req: Request, res: Response) => {
    try {

        const data = await productService.getAllProduct();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data,
        })
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: error.message,
            data: null,
        })
    }
}


export const productController = {
    createProduct,
    getAllProduct
}