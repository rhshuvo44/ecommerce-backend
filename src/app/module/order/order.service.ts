import { Product } from '../product/product.model';
import { TOrders } from './order.interface';
import { Order } from './order.model';

// create a new Order
const orderCreate = async (orderData: TOrders) => {
  const productFind = await Product.findById(orderData.productId);
  if (!productFind) {
    return {
      data: null,
      message: 'Product not found',
    };
  } else {
    const newOrder = await Order.create(orderData);
    return {
      data: newOrder,
      message: 'Order created successfully!',
    };
  }
};
// getAllOrder
const getAllOrder = async (email: string | undefined) => {
  if (email) {
    const result = await Order.find({ email: { $regex: email } });
    return {
      data: result,
      message: 'Orders fetched successfully for user email!',
    }

  } else {
    const result = await Order.find();
    return {
      data: result,
      message: 'Orders fetched successfully!',
    }

  }
};

export const orderService = {
  orderCreate,
  getAllOrder,
};
