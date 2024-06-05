import { TProduct } from './product.interface';
import { Product } from './product.model';

//create a new product
const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
//get all products from the database
const getAllProduct = async (searchTerm: string | undefined) => {
  if (searchTerm) {
    const result = await Product.findOne({ name: searchTerm });

    // const result = await Product.find({ $in: [{ $name: searchTerm }] });
    // // Filter products based on search term
    // // result = Product.filter(product =>
    // //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
    // // );
    // result = Product.findIndex(product => console.log(product))
    return {
      result,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
    };
  } else {
    const result = await Product.find();
    return {
      result,
      message: 'Products fetched successfully!',
    };
  }
};
//get a single products from the database
const getSingleProduct = async (id: string) => {
  const result = await Product.findById({ _id: id });
  return result;
};
//get a single products from the database
const updateSingleProduct = async (
  id: string,
  updatedProductData: TProduct,
) => {
  const findProduct = await Product.findById({ _id: id });

  if (!findProduct) {
    return { data: null, message: `Product with ID ${id} not found` };
  } else {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductData,
      { new: true },
    );
    return {
      data: updatedProduct,
      message: `Product updated successfully!`,
    };
  }
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
  updateSingleProduct,
};
