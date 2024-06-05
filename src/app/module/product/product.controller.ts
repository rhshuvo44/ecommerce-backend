import { Request, Response } from 'express';
import { productService } from './product.service';
import { ProductValidationSchema } from './product.validation';

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodData = ProductValidationSchema.parse(product)
    const data = await productService.createProduct(zodData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
// get all products from the database

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const data = await productService.getAllProduct();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
// get single products from the database

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = await productService.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
// delete single products from the database

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
};
