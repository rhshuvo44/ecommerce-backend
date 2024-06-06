import { Product } from '../product/product.model';
import { TOrders } from './order.interface';
import { Order } from './order.model';

// create a new Order
const orderCreate = async (orderData: TOrders) => {
  const product = await Product.findById(orderData.productId);

  if (!product) {
    return {
      success: false,
      data: null,
      message: 'Product not found',
    };
  }
  // Check if enough stock is available
  if (product?.inventory?.quantity < orderData.quantity) {
    return {
      success: false,
      data: null,
      message: 'Insufficient quantity available in inventory',
    };
  }
  const newOrder = await Order.create(orderData);
  // Update product quantity and inStock
  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();
  return {
    success: true,
    data: newOrder,
    message: 'Order created successfully!',
  };
};
// getAllOrder
const getAllOrder = async (email: string | undefined) => {
  if (email) {
    const result = await Order.find({ email: { $regex: email } });
    return {
      data: result,
      message: 'Orders fetched successfully for user email!',
    };
  } else {
    const result = await Order.find();
    return {
      data: result,
      message: 'Orders fetched successfully!',
    };
  }
};

export const orderService = {
  orderCreate,
  getAllOrder,
};
