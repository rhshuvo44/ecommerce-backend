import { Product } from "../product/product.model";
import { TOrders } from "./order.interface";
import { Order } from "./order.model";

// create a new Order
const orderCreate = async (orderData: TOrders) => {
    const productFind = await Product.findById( orderData.productId )
    if (!productFind) {
        return {
            data: null,
            message: 'Product not found'
        }
    } else {
        const newOrder = await Order.create(orderData);
        return {
            data: newOrder,
            message: "Order created successfully!"
        }
    }
}



export const orderService = {
    orderCreate
}