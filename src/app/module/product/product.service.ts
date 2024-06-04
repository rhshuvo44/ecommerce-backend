import { TProduct } from './product.interface';
import { Product } from './product.model';

//create a new product
const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
//get all products from the database
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};
//get a single products from the database
const getSingleProduct = async (id: string) => {
  const result = await Product.findById({ _id: id });
  return result;
};
//delete a single products from the database
const deleteProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const productService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
};
