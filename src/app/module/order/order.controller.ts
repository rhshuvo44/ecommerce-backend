import { Request, Response } from 'express';
import { orderService } from './order.service';
import { OrderValidationSchema } from './order.validation';
// create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodValidationData = OrderValidationSchema.parse(orderData);
    const { data, message, success } = await orderService.orderCreate(zodValidationData);
    if (success === false) {
      res.status(404).json({
        success,
        message,
        data,
      });
    }
    res.status(200).json({
      success,
      message,
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
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req?.query?.email as string | undefined
    const { data, message } = await orderService.getAllOrder(email);
    if (data.length <= 0) {
      res.status(200).json({
        success: false,
        message: 'Order not found',
        data
      });
    } else {
      res.status(200).json({
        success: true,
        message,
        data
      });
    }
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
